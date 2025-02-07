import React from "react";
import { CSSProp } from "styled-components";
import styles from "./styles";

export type PhotoSkeletonComp = React.FC<{
  additionalCss?: Partial<Record<keyof typeof styles, CSSProp>>
}>
