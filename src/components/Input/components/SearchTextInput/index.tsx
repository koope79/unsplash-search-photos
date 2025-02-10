import React from "react";
import { SvgClearIcon, SvgSearchLupa } from "src/svgx";
import useId from "src/shared/hooks/useId";
import { SearchTextInputComp } from "../../types";
import styles from "../../styles";

const SearchTextInput: SearchTextInputComp = ({
  value = "",
  placeholder = " ",
  onChangeValue,
  onSearch = () => void (0),
  required = false,
  additionalCss = {},
  maxLength = 200,
  disabled = false,
}) => {
  const inputId = useId();

  return (
    <div css={[styles.container(), additionalCss.container]}>
      <div css={styles.searchLupa()}>
        <SvgSearchLupa />
      </div>
      <input
        id={inputId}
        type={"text"}
        value={value}
        required={required}
        placeholder={placeholder}
        css={[styles.input(disabled, value.length > 0), additionalCss.input]}
        maxLength={maxLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
        disabled={disabled}
      />
      {(value.length > 0 && !disabled) && (
        <div
          css={[styles.clearInput(), additionalCss.clearInput]}
          onClick={() => onChangeValue("")}
        >
          <SvgClearIcon css={[styles.clearInputIcon(), additionalCss.clearInputIcon]} />
        </div>
      )}
    </div>
  );
};

export default SearchTextInput;
