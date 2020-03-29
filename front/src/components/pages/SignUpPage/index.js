import React from "react";
import { StyledSingUp } from "./style";
import { SignUpForm } from "../../ui/SignUpForm/index";

export const SignUpPage = () => {
  const pageMessage =
    "If you sign up you agree with all our terms and conditions where we can do whaterver we want with the data!";
  return (
    <>
      <StyledSingUp>
        <div className="container">
          <div className="col full">
            <div className="row">
              <div className="first">
                <h1>Sign Up</h1>
              </div>
              <div className="second">
                <h3>Hello!</h3>
                <h4>Welcome to Ironprofile!</h4>
              </div>
            </div>
            <div className="row">
              <div className="col full">
                <SignUpForm message={pageMessage} />
              </div>
            </div>
          </div>
        </div>
      </StyledSingUp>
    </>
  );
};
