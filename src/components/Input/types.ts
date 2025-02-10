import React from "react";
import { CSSProp } from "styled-components";
import styles from "./styles";

export type InputComp = React.FC<({ type: "search" } & InputProps & SearchTextInputProps)>

export type SearchTextInputComp = React.FC<InputProps & SearchTextInputProps>

type InputProps = {
  required?: boolean
  invalid?: boolean
  disabled?: boolean
  additionalCss?: Partial<Record<keyof typeof styles, CSSProp>>
}

type SearchTextInputProps = {
  value: string
  onChangeValue: (value: string) => void
  onSearch?: () => void
  placeholder?: string
  maxLength?: number
}
