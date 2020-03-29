import React from "react";
import { StyledInput } from "./style";

export const Input = ({ label, type, placeholder, name, inputRef }) => {
  return (
    <>
      <StyledInput>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          ref={inputRef}
        />
      </StyledInput>
    </>
  );
};
