/* eslint-disable react/no-unescaped-entities */
import React from "react";

import * as S from "./styles";

export default function About({ show }: { show: boolean }) {
  return (
    <>
      {show && (
        <S.Main>
          <S.Text>
            O nosso site de amigo secreto é a solução perfeita para organizar
            trocas de presentes de forma simples e divertida! <br /> Com apenas
            alguns cliques, cadastre os participantes, e nós cuidaremos do
            sorteio, enviando por e-mail os resultados de forma totalmente
            aleatória e secreta.
            <br />
            Junte-se a nós e simplifique a organização do seu amigo secreto
            enquanto proporciona momentos únicos de carinho e surpresa!
          </S.Text>
        </S.Main>
      )}
    </>
  );
}
