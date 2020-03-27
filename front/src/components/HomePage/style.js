import styled from "styled-components";
import background from "../../../public/images/oval-bg.png";

export const StyledHome = styled.section`
  .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    padding-left: 20rem;
    background: url(${background}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    .col {
      width: 50%;
      height: 100vh;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      .first {
        width: 100%;
        padding: 10rem 0;
        margin-bottom: 10rem;
      }
      .second {
        width: 100%;
      }
    }
  }
`;
