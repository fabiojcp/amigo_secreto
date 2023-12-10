'use client'
import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  background-color: var(--medium);
  border-radius: 8px;
  width: 80vw;
  bottom: 10px;
  left: 10vw;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  color: var(--white);
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  background-color: var(--blue);
  padding: 8px;
  border-radius: 8px;
`;
