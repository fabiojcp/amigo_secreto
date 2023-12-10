import type { Metadata } from "next";
import Head from "next/head";
import StyledComponentsRegistry from "./lib/registry";
import FavIcon from "./favicon.ico";
import GlobalStyles from "@/styles/globalStyles";

export const metadata: Metadata = {
  title: "Não vale meia!",
  description: "Sorteie agora mesmo seu amigo secreto!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <title>Não vale meia!</title>
        <link rel="shortcut icon" href={FavIcon.src} type="image/x-icon" />
        <link rel="icon" href={FavIcon.src} type="image/x-icon" />
      </Head> */}
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
