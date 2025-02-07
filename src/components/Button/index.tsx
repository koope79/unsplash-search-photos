import React, { memo } from "react";
import { ButtonComp } from "./types";
import styles from "./styles";

const Button: ButtonComp = ({
  onClick,
  children,
  theme = "primary",
  disabled = false,
  additionalCss = {},
}) => (
  <button
    css={[styles.button(theme, disabled), additionalCss.button]}
    onClick={disabled ? () => void (0) : onClick}
  >
    <div css={[styles.content(theme), additionalCss.content]}>
      {children}
    </div>
  </button>
);

export default memo(Button);
