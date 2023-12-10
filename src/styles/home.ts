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
  padding: 5vh 10vw;
  padding-bottom: 20px;

  overflow: scroll;

  > div:first-child > svg {
    max-height: 25vh;
  }
`;

export const Label = styled.label`
  color: var(--white);
  font-weight: 600;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--white);

  b {
    color: var(--blue);
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotateY(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotateY(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
  > svg {
    width: 12px;
    height: 12px;
    margin-bottom: 6px;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }
`;

export const SubmitButton = styled.button`
  background-color: green;
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  font-size: larger;
`;
