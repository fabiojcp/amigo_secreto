"use client";
import React, { Suspense } from "react";
import Image from "next/image";

import NewGiveWay from "../../components/newGiveWay/newGiveWay";
import AcceptCookies from "../../components/acceptCookies";

import Logo from "../../assets/icon.png";
import toast, { Toaster } from "react-hot-toast";
import * as S from "../../styles/styles";

import { Person } from "../../types/types";
import { HandlerCreateGroup } from "../../lib/functions";
import NewGiveAwayStage2 from "@/components/newGiveWay/stage2";

export default function Home() {
  const [stage, setStage] = React.useState(0);
  const [group, setGroup] = React.useState("");
  const [persons, setPersons] = React.useState<Person[]>([]);

  const [disableInputs, setDisableInputs] = React.useState(false);

  async function createGroup() {
    setDisableInputs(true);
    try {
      await HandlerCreateGroup(group, persons);

      setStage(1);
      setDisableInputs(false);
      return Promise.resolve();
    } catch {
      setDisableInputs(false);
      return Promise.reject();
    }
  }

  return (
    <Suspense>
      <S.Main>
        {stage === 0 && (
          <S.Header>
            <Image
              src={Logo}
              alt="presente no formato de cubo, na cor vermelha com fita amarela, aberto com a tampa acima flutuando. Entre a tampa e caixa há o texto 'amigo secreto', em letra cursiva. confetes em tons de vermelho a vermelho escuro e amarelos voam nas laterais entre a tampa e a caixa de presente"
            />
          </S.Header>
        )}

        {stage === 0 && (
          <>
            <S.Card>
              <NewGiveWay
                group={group}
                setGroup={setGroup}
                persons={persons}
                setPersons={setPersons}
                block={disableInputs}
              />
            </S.Card>
            <S.SubmitButton
              onClick={() => {
                toast.promise(createGroup(), {
                  loading: "Criando grupo...",
                  success: "Grupo criado com sucesso!",
                  error: "Erro ao criar grupo, tente novamente mais tarde.",
                });
              }}
            >
              Finalizar
            </S.SubmitButton>
          </>
        )}

        {stage === 1 && <NewGiveAwayStage2 group={group} />}

        <Toaster />
      </S.Main>
    </Suspense>
  );
}
