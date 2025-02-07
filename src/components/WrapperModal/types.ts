import React from "react";
import { CSSProp } from "styled-components";
import styles from "./styles";

export type WrapperModalComp = React.FC<{
  onClose: () => void
  additionalCss?: Partial<Record<keyof typeof styles, CSSProp>>
}>
