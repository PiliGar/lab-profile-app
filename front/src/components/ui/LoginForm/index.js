import React from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { Input } from "../Input/index";
import { Submit } from "../Submit/index";

export const LoginForm = ({ message }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="inputs">
            <Input
              label="Username"
              type="text"
              name="Username"
              inputRef={register({
                required: true,
                max: 100,
                min: 5,
                maxLength: 80
              })}
            />
            <Input
              label="Password"
              type="text"
              name="Password"
              inputRef={register({
                required: true,
                maxLength: 100,
                pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i
              })}
            />
          </div>
          <div className="submit">
            <div>
              <p>{message}</p>
            </div>
            <Submit text="Log in" />
          </div>
        </div>
      </form>
    </StyledForm>
  );
};
