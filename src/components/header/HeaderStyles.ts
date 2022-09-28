import styled from "styled-components";

export const BackButton = styled.button`
  background-color: #fff;
  font-size: 16px;
  padding: 6px;
  margin-bottom: 10px;
  border: 1px solid #a9a9a9;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    padding: 5px;
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  margin: 20px 0;

  @media (max-width: 700px) {
    font-size: 20px;
    margin: 18px 0;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin: 17px 0;
  }
`;
