import styled from "styled-components";

export const Image = styled.img`
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px solid #000;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 8px;
  }
  @media (max-width: 480px) {
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 7px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
