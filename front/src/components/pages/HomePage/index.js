import React from "react";

import { StyledHome } from "./style";
import { Button } from "../../ui/Button/index";

export const HomePage = () => {
  return (
    <>
      <StyledHome>
        <div className="container">
          <div className="col full">
            <div className="row">
              <div className="first">
                <h1>Iron Profile</h1>
                <h2>
                  Today we will create an App with authoritation, adding some
                  cool styles!
                </h2>
              </div>
              <div className="second">
                <h3>Hello!</h3>
                <h4>Welcome to Ironprofile!</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="first">
                  <Button
                    className="btn"
                    route="/signup"
                    text="SING UP"
                  ></Button>
                  <Button className="btn" route="/login" text="LOG IN"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
};
