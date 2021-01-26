import styled from "styled-components";

export const CFooter = styled.div`
  width: 100vw;
  min-width: 30rem;

  min-height: 13rem;
  padding: 2.4rem 3.4rem 2.4rem 2rem;

  position: sticky;
  bottom: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgb(56, 56, 56);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 14px inset;

  font-size: 1.6rem;
  color: white;

  z-index: 0;

  section {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    input {
      width: 20rem;
      height: 3.5rem;

      outline: none;
      border: 1px solid white;
      background: transparent;

      padding: 1rem;

      color: white;
      font-size: 1.6rem;

      margin-right: 1.6vw;
    }

    button {
      width: 10rem;
      height: 3.5rem;
      padding: 1rem;

      border: none;
      border-radius: 2rem;

      background: rgb(170, 170, 170);

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 691px) {
    flex-direction: column;
    align-items: left;
    justify-content: center;

    section {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 60vw;
      }

      button {
        width: 30vw;
      }
    }
  }
`;

export const CSocialMedia = styled.div`
  display: flex;
  align-items: flex-start;

  p {
    align-self: center;
    margin: 0 2vw;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 2vw;

    a {
      line-height: 3rem;
    }
  }

  @media only screen and (max-width: 691px) {
    align-items: flex-start;
    justify-content: center;
    width: 100vw;

    padding: 2vw;
    p {
      order: 2;
      position: fixed;
      bottom: 2vw;
    }

    div {
      margin: 2vw 2vw 4vw 2vw;
    }
  }
`;
