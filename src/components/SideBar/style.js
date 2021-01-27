import styled from "styled-components";

export const CSideBar = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  margin: 1vw 1vw 0 0;

  z-index: 2;

  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  img {
    width: 16vw;
    height: 24vw;
  }

  h2 {
    font-size: 2vw;
    line-height: 2.4vw;
    font-weight: 400;
    text-align: right;
    margin-top: 1vw;
  }

  @media only screen and (max-width: 691px) {
    position: relative;

    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0px;

    order: 0;
    img {
      width: 50vw;
      height: 68vw;
    }

    h2 {
      font-size: 5.5vw;
      line-height: 5.9vw;
      font-weight: 400;
      text-align: right;
      margin: 1vw 1vw 0 0;
    }
  }
`;
