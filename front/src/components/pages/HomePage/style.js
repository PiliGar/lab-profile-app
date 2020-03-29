import styled from "styled-components";
import background from "../../../../public/images/oval-bg.png";

export const StyledHome = styled.section`
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    background: url(${background}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    .row {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .first {
        width: 50%;
        box-sizing: border-box;
        padding-left: 20rem;
      }
      .second {
        width: 50%;
        box-sizing: border-box;
        padding-left: 20rem;
      }
    }

    .col {
      width: 50%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      .first {
        width: 100%;
        padding: 10rem 0;
        box-sizing: border-box;
        padding-left: 20rem;
      }
      .second {
        width: 100%;
        box-sizing: border-box;
        padding-left: 20rem;
      }
      &.full {
        width: 100%;
      }
    }
  }
`;
