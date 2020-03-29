import React from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { Input } from "../Input/index";
import { Submit } from "../Submit/index";

export const SignUpForm = ({ message }) => {
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
            <label>Campus</label>
            <select name="Campus" ref={register}>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Miami">Miami</option>
              <option value="Paris">Paris</option>
              <option value="Berlin">Berlin</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="México">México</option>
              <option value="Sao Paulo">Sao Paulo</option>
              <option value="Lisbon">Lisbon</option>
            </select>
            <label>Course</label>
            <select name="Course" ref={register}>
              <option value="WebDev">WebDev</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>
          <div className="submit">
            <div>
              <p>{message}</p>
            </div>
            <Submit text="Create the Account" />
          </div>
        </div>
      </form>
    </StyledForm>
  );
};
