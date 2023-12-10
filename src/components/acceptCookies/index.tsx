/* eslint-disable react/no-unescaped-entities */
import React from "react";

import * as S from "./styles";

export default function AcceptCookies() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      {show && (
        <S.Main>
          <S.Text>
            Este site usa cookies para melhorar sua experiência.
            <br /> Ao clicar em "Aceitar e fechar" você concorda com o uso de
            cookies, termos e políticas do site.
          </S.Text>
          <S.Button onClick={() => setShow(false)}>Aceitar e fechar</S.Button>
        </S.Main>
      )}
    </>
  );
}
