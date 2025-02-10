import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @tailwind variants;

  @font-face {
    font-family: "Arial";
    src: url(${require("src/assets/fonts/arial.TTF")}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @supports (not (selector(::-webkit-scrollbar))) and (scrollbar-width: thin) {
    * {
      scrollbar-width: thin;
      scrollbar-color: #C1C1C1 rgb(255, 255, 255);
    }
  }

  @supports selector(::-webkit-scrollbar) {
    *::-webkit-scrollbar {
      height: 12px;
      width: 12px;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #C1C1C1;
      border-radius: 10px;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 3px inset;
    }

    *::-webkit-scrollbar-track {
      background: rgb(255, 255, 255);
      border-radius: 10px;
    }
  }

  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    position: relative;
    overflow: hidden;
    min-height: 100%;
    min-width: max(100%, 320px);
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column;
    ${tw`bg-basicWhite`}
  }

  @media (min-width: 0px) {
    #root {
      min-width: 320px;
    }
  }
`;

const RootStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default RootStyles;
