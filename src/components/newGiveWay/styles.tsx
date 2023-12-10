"use client";
import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  color: var(--white);

  b {
    color: var(--blue);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AddPersonBox = styled.div`
  display: flex;
  gap: 4px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: calc(70% - 4px);
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 30%;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  color: var(--white);
  font-weight: 600;
`;

export const Input = styled.input`
  color: var(--dark);
  padding: 8px;
  background-color: var(--light);
  border-radius: 8px;
  border: none;
  outline: none;
  outline-color: transparent;

  :focus,
  :active {
    outline: none;
    outline-color: transparent;
  }
`;

export const Button = styled.button`
  color: var(--white);
  padding: 8px;
  background-color: var(--blue);
  border-radius: 8px;
  border: none;
  outline: none;
  outline-color: transparent;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: var(--dark-blue);
  }

  :focus,
  :active {
    outline: none;
    outline-color: transparent;
  }
`;

export const PersonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid var(--white);
  border-radius: 8px;
  padding: 8px;
`;

export const HR = styled.hr`
  height: 1px;
  background-color: var(--white);
`;

export const SubmitButton = styled.button`
  background-color: var(--blue);
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--white);
  font-weight: bold;
  font-size: medium;
`;
