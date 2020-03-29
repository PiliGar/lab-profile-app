import React from "react";
import { StyledProfile } from "./style";
import { SignUpForm } from "../../ui/SignUpForm/index";

export const ProfilePage = () => {
  const pageMessage =
    "If you sign up you agree with all our terms and conditions where we can do whaterver we want with the data!";
  return (
    <>
      <StyledProfile>
        <div className="container">
          <div className="col full">
            <div className="row">
              <div className="first">
                <h1>Profile</h1>
              </div>
              <div className="second">
                <h3>Pic</h3>
                <h4>Pic</h4>
              </div>
            </div>
            <div className="row">
              <div className="first">
                <div>
                  <p>Username</p>
                  <h3>q</h3>
                </div>
                <div>
                  <p>Username</p>
                  <h3>q</h3>
                </div>
                <div>
                  <p>Username</p>
                  <h3>q</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledProfile>
    </>
  );
};
