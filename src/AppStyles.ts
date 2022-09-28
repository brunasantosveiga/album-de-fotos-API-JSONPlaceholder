import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
`;
export const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 25px;

  @media (max-width: 700px) {
    font-size: 34px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
`;
