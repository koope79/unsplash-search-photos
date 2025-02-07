import React from "react";
import { CSSProp } from "styled-components";
import styles from "./styles";

export type ScrollPaginationElementComp = React.FC<{
  onScrollEvent: () => void
  additionalCss?: Partial<Record<keyof typeof styles, CSSProp>>
}>
