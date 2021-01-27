import styled from "styled-components";

export const CShop = styled.div`
  margin: 3vw 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    border: none;
    outline: none;

    background: black;

    width: 26vw;
    height: 2.6vw;

    color: white;
    font-size: 2vw;

    border: 2px solid black;
    border-radius: 2rem;

    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
      background: white;
      box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.4);
      color: black;
      transition: all ease-in-out 0.2s;
    }
  }

  section {
    display: flex;
    overflow: hidden;
    width: 50vw;

    p {
      display: inline-block;
      white-space: nowrap;

      font-family: "Hebbo", sans-serif;
      color: red;

      will-change: transform;
      animation: 5s linear 0s infinite normal none running moving;

      font-size: 1vw;

      span {
        font-family: "Heebo", Arial, Helvetica, sans-serif;
      }
    }
  }

  @keyframes moving {
    0% {
      transform: translate(-10vw, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @media only screen and (max-width: 691px) {
    justify-content: center;
    button {
      width: 95vw;
      height: 6vw;

      position: sticky;
      top: 0px;

      display: block;

      font-size: 5vw;
    }

    section {
      display: none;
    }
  }
`;
