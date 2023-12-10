"use client";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  gap: 24px;

  > img {
    height: 60vw !important;
    min-height: 60vw !important;
    max-height: 60vw !important;
    width: auto !important;
    min-width: auto !important;
    max-width: auto !important;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  color: var(--white);
  text-align: center;
`;

export const SubmitButton = styled.button`
  background-color: var(--blue);
  padding: 8px;
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  font-size: medium;
  width: 80%;
`;
