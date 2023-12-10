'use client'
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    -webkit-tap-highlight-color: transparent;
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      /* background: var(--light-1); */
      background: transparent;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--blue);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--blue);
    }
  }

  html, border-style, #root{
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  #root {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;

    > div {
      width: 100%;
    }
  }

  body {
    overflow-x: hidden;
    background-color: var(--dark);
    
    &::-webkit-scrollbar {
    display: none;
  }

  }
  
  *, button, input{
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  

  
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);

  }

  :root {
    --white: #fff;
    --blue: #3f88c5;
    --dark: #140f2d;
    
    --light: #83A4C6;
    --medium: #1D3040;
    --shadow: 0px 0px 8px 4px #ffffff20;
  }
`;
