import React from "react";
import { CSSProp } from "styled-components";
import styles from "./styles";

export type PhotoComp = React.FC<{
  imgUrls?: Record<"full" | "raw" | "regular" | "small" | "small_s3" | "thumb", string>
  additionalCss?: Partial<Record<keyof typeof styles, CSSProp>>
}>
