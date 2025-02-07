import React, { ReactNode } from "react";
import { CSSProp } from "styled-components";
import styles from "./styles";

export type ButtonComp = React.FC<{
  onClick?: () => void
  additionalCss?: Partial<Record<keyof typeof styles, CSSProp>>
  theme?: ButtonTheme
  children?: ReactNode
  disabled?: boolean
}>

export type ButtonTheme =
  "primary"
