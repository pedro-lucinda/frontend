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

    border-radius: 2rem;

    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.4);

    &:hover {
      cursor: pointer;
      background: white;
      border: 2px solid black;
      box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
      color: black;
      transition: all ease-in-out 0.3s;
    }
  }

  @media only screen and (max-width: 691px) {
    button {
      width: 100vw;
      height: 6vw;

      position: sticky;
      top: 0px;

      display: block;

      font-size: 5vw;
    }
  }
`;
