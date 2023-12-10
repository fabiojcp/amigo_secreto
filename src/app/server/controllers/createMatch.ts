import prismaConnect from "../db";
import type { NextApiResponse } from "next";
import type { createMatch } from "./createMatchTypes";
import { shuffle } from "../../../lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import sendEmail from "@/lib/email/transporter";
import { htmlBody } from "@/lib/email/email";

export async function createMatch(req: createMatch): Promise<NextResponse> {
  const group = req?.group;
  const persons = req?.persons;

  if (!group || !persons) {
    return new NextResponse(
      `${!group ? "Group" : "Person"} and cannot be empty`,
      { status: 400 }
    );
  }

  if (group === "" || persons.length === 0) {
    return new NextResponse(
      `${group === "" ? "Group" : "Person"} and cannot be empty`,
      { status: 400 }
    );
  }

  if (persons.length < 2) {
    return new NextResponse("You need at least two people to create a match", {
      status: 400,
    });
  }

  const shuffled = shuffle(persons);
  let groupStatus: { id: string } = {} as unknown as { id: string };

  try {
    const groupRep = await prismaConnect.group.create({
      data: { name: group },
    });
    groupStatus = groupRep;
    const personsRep = await prismaConnect.person.createMany({
      data: persons.map((person, index) => ({
        ...person,
        groupId: groupRep.id,
      })),
    });

    for (let index = 0; index < persons.length; index++) {
      await prismaConnect.person.update({
        where: { id: persons[index].id },
        data: { refereeId: shuffled[index].id },
      });
    }

    for (let index = 0; index < persons.length; index++) {
      await sendEmail({
        to: persons[index]?.email || "",
        subject: `Amigo secreto ${group}`,
        html: htmlBody(persons[index], groupRep),
      });
    }

    const groupResult = await prismaConnect.group.findUnique({
      where: { id: groupRep.id },
      include: {
        users: {
          include: { refer: true },
        },
      },
    });

    return NextResponse.json({ group, persons, shuffled, groupResult });
  } catch (err) {
    console.log(err);

    if (groupStatus?.id) {
      await prismaConnect.group.delete({ where: { id: groupStatus.id } });
    }

    return new NextResponse("Error creating match", { status: 400 });
  }
}

export async function GetMatch({
  groupId,
  personId,
}: {
  groupId: string;
  personId: string;
}) {
  if (!groupId || !personId) {
    return new NextResponse(
      `${!groupId ? "Group" : "Person"} and cannot be empty`,
      { status: 400 }
    );
  }

  const findPerson = await prismaConnect.person.findUnique({
    where: { id: personId },
    include: { groups: true, refer: true },
  });

  if (!findPerson) {
    return new NextResponse("Person not found", { status: 400 });
  }
  return NextResponse.json(findPerson);
}
