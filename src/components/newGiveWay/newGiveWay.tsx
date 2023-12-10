import React from "react";

import type { Person } from "../../types/types";

import * as S from "./styles";
import { FaTrash } from "react-icons/fa6";
import { addPerson, deletePerson } from "./functions";

interface props {
  group: string;
  setGroup: React.Dispatch<React.SetStateAction<string>>;
  persons: Person[];
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
  block: boolean;
}

export default function NewGiveWay({
  group,
  setGroup,
  persons,
  setPersons,
  block,
}: props) {
  const [person, setPerson] = React.useState<Person>({} as Person);

  return (
    <>
      <S.Title>
        Sortear <b>Amigo Secreto</b>
      </S.Title>
      <S.Row>
        <S.Label htmlFor="group">Nome do grupo</S.Label>
        <S.Input
          type="text"
          id="group"
          autoComplete="false"
          maxLength={40}
          value={group}
          onChange={(e) => {
            setGroup(e.target.value);
          }}
          disabled={block}
        />
      </S.Row>
      <S.HR />
      <S.AddPersonBox>
        <div>
          <S.Label htmlFor="person">Nome do participante</S.Label>
          <S.Input
            type="text"
            id="person"
            autoComplete="false"
            maxLength={40}
            value={person?.name}
            onChange={(e) => {
              setPerson((prev) => ({ ...prev, name: e.target.value }));
            }}
            disabled={block}
          />
          <S.Label htmlFor="personEmail">Email</S.Label>
          <S.Input
            type="email"
            id="personEmail"
            autoComplete="false"
            maxLength={40}
            value={person?.email}
            onChange={(e) => {
              setPerson((prev) => ({ ...prev, email: e.target.value }));
            }}
            disabled={block}
          />
        </div>
        <div>
          <S.Button
            onClick={() => addPerson(person, setPerson, persons, setPersons)}
          >
            Adicionar
          </S.Button>
        </div>
      </S.AddPersonBox>

      <S.PersonsBox>
        {Array.isArray(persons) && persons.length === 0 ? (
          <S.Label>0 participantes</S.Label>
        ) : (
          <>
            <S.Label>{persons.length} participantes</S.Label>

            {persons.map((person, index) => (
              <>
                <S.AddPersonBox key={person?.id || index}>
                  <div>
                    <S.Label>{person?.name}</S.Label>
                    <S.Label>{person?.email}</S.Label>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <FaTrash
                      fill="#fff"
                      onClick={() => {
                        deletePerson(person.id, persons, setPersons);
                      }}
                    />
                  </div>
                </S.AddPersonBox>

                {index < persons.length - 1 && (
                  <S.HR key={person?.id + "-hr" || index + "-hr"} />
                )}
              </>
            ))}
          </>
        )}
      </S.PersonsBox>
    </>
  );
}
