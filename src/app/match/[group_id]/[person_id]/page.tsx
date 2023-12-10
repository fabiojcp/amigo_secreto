/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { Suspense } from "react";
import Lottie from "lottie-react";
import animationData from "../../../../assets/giftopened.json";

import * as S from "../../../../styles/home";
import BaseApi from "@/lib/frontServices";
import toast from "react-hot-toast";
import { handlerGetData } from "./functions";

export default function CategoryPage({
  params,
}: {
  params: { group_id: string; person_id: string };
}) {
  const [refer, setRefer] = React.useState<null | string>(null);
  const [isLoading, setLoading] = React.useState(true);

  const handlerData = React.useCallback(() => {
    handlerGetData(params, setRefer, setLoading);
  }, []);

  React.useEffect(() => {
    handlerData()
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!refer) return <p>Dados não encontrados</p>;

  return (
    <>
      <S.Main>
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />

        <S.Title>
          {refer.length > 0 && `Que legal! Você tirou: ${refer}`}
        </S.Title>
      </S.Main>
    </>
  );
}
