"use client";
import React, { Suspense } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/home.json";
import { FaQuestionCircle } from "react-icons/fa";

import { Toaster } from "react-hot-toast";
import * as S from "../styles/home";

import Link from "next/link";
import About from "@/components/about";

export default function Home() {
  const [showAbout, setShowAbout] = React.useState(false);

  return (
    <Suspense>
      <S.Main
        onClick={() => {
          setShowAbout(false);
        }}
      >
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />
        <S.Title>
          Crie seu grupo e convide o pessoal <b>Amigo Secreto</b>
          <FaQuestionCircle
            onMouseEnter={() => {
              setShowAbout(true);
            }}
            onMouseLeave={() => {
              setShowAbout(false);
            }}
            onClick={(e: any) => {
              e.stopPropagation();
              setShowAbout(true);
            }}
          />{" "}
          <About show={showAbout} />
          cuida da brincadeira!
        </S.Title>
        <Link href="/create">
          <S.SubmitButton>Criar Grupo</S.SubmitButton>
        </Link>

        <Toaster />
      </S.Main>
    </Suspense>
  );
}
