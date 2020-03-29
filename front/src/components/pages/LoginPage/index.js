import React from "react";

import { StyledLogin } from "./style";
import { LoginForm } from "../../ui/LoginForm/index";

export const LoginPage = () => {
  const pageMessage =
    "If you sign up you agree with all our terms and conditions where we can do whaterver we want with the data!";
  return (
    <>
      <StyledLogin>
        <div className="container">
          <div className="col full">
            <div className="row">
              <div className="first">
                <h1>Log in</h1>
              </div>
              <div className="second">
                <h3>Hello!</h3>
                <h4>Awesome to have at IronHack again!</h4>
              </div>
            </div>
            <div className="row">
              <div className="col full">
                <LoginForm message={pageMessage} />
              </div>
            </div>
          </div>
        </div>
      </StyledLogin>
    </>
  );
};
