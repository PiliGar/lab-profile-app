import React from "react";
import { StyledSubmit } from "./style";

export const Submit = ({ text }) => {
  return (
    <>
      <StyledSubmit className="btn">
        <input type="submit" value={text} />
      </StyledSubmit>
    </>
  );
};
