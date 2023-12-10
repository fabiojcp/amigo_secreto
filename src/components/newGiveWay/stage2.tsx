import Lottie from "lottie-react";
import animationData from "../../assets/gift.json";
import * as S from "./styles";
import Link from "next/link";

export default function NewGiveAwayStage2({ group }: { group: string }) {
  return (
    <>
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
      />

      <S.Title>
        Grupo <b>{group}</b> criado com sucesso!
      </S.Title>

      <S.Label>Agora só checar o email e ver quem você tirou!</S.Label>

      <Link href="/">
        <S.SubmitButton>Voltar para início</S.SubmitButton>
      </Link>
    </>
  );
}
