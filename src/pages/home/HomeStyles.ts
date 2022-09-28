import styled from "styled-components";

export const Titles = styled.p`
  font-size: 22px;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 10px;
  margin: 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #e6e8e7;
  }

  @media (max-width: 700px) {
    font-size: 18px;
    padding: 8px;
    margin: 3px 0;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    border: 1px solid #000;
    margin: 2px 0;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    margin: 1px 0;
  }
`;
