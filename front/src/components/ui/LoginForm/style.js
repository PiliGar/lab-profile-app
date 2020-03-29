import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;
  .form {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    .inputs {
      width: 40%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 0 10rem 0;
      box-sizing: border-box;
      padding-left: 10%;
      select {
        font-size: 1.8rem;
        color: #c4c4c4;
        background: #eaeaea;
        border: 0px;
        height: 5rem;
        padding: 1.5rem;
        width: 80%;
        margin-bottom: 2rem;
        &::placeholder {
          color: #c4c4c4;
        }
      }
    }
    .submit {
      width: 40%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: flex-start;
      box-sizing: border-box;
      p {
        width: 80%;
        margin-bottom: 5rem;
      }
    }
  }
`;
