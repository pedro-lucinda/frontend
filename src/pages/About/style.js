import styled from "styled-components";

export const CHome = styled.div`
  width: 100vw;

  main {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;

    position: relative;
    background: white;
    padding: 1vw;
    margin-bottom: 5vw;

    z-index: 1;

    p {
      font-weight: 400;
      font-size: 3.5vw;
      line-height: 3.5vw;
      max-width: 78vw;

      span {
        font-family: "Playfair Display", serif;
        font-style: italic;
      }
    }
  }

  @media only screen and (max-width: 691px) {
    main {
      order: 1;
      padding: 1vw;
      p {
        max-width: 100vw;
        order: 2;

        font-size: 6.5vw;
        line-height: 6.8vw;

        margin: 4vw auto;

        span {
          font-family: "Playfair Display", serif;
          font-style: italic;
        }
      }
    }
  }

`