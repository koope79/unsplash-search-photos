import React from "react";
import SearchTextInput from "./components/SearchTextInput";
import { InputComp } from "./types";

const Input: InputComp = (props) => {
  return <SearchTextInput {...props} />;
};

export default Input;
