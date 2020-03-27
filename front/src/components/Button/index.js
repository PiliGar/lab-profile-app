import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./style";

export const Button = ({ route, text }) => {
  return (
    <>
      <StyledButton className="btn">
        <Link to={route}>{text}</Link>
      </StyledButton>
    </>
  );
};
