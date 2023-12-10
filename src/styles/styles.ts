"use client";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100svh;
  background: linear-gradient(
      180deg,
      var(--dark) 50%,
      rgba(0, 76, 153, 0.2) 100%
    ),
    var(--dark);
  align-items: center;

  padding-bottom: 20px;

  overflow: scroll;
`;

export const Header = styled.header`
  width: 100%;
  max-height: 20vh !important;
  display: flex;
  justify-content: center;
  > img {
    width: auto !important;
    min-width: auto !important;
    max-height: 20vh !important;
    aspect-ratio: 678 / 621;
  }
`;

export const Card = styled.div`
  min-height: 50vh;
  width: 80vw;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  background-color: var(--dark);

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const SubmitButton = styled.button`
  background-color: green;
  padding: 8px;
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  font-size: larger;
  width: 80%;
`;
