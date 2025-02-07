import React from "react";
import { SpinnerComp } from "./types";
import { css } from "styled-components";

const Spinner: SpinnerComp = ({
  size = 18,
  weight = 2,
  interval = 3,
  colorPrimary = "#000000",
  colorSecond = "#ffffff",
}) => (
  <div css={css`
    & {
      width: ${size}px;
      height: ${size}px;
      border-radius: 100%;
      border: ${weight}px solid ${colorSecond};
      border-right: ${weight}px solid ${colorPrimary};
      border-left: ${weight}px solid ${colorPrimary};
      border-top: ${weight}px solid ${colorPrimary};
      animation: spinner ${interval}s linear infinite;
    }

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}/>
);

export default Spinner;
