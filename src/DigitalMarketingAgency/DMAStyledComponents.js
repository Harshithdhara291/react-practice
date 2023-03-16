import styled from "styled-components";
export const DMAContainer = styled.div`
  @media (min-width: 900px) {
    height: 500px;
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (max-width: 900px) {
    min-height: 500px;
    padding-right: 7px;
    padding-left: 7px;
  }
`;
export const DMATitle = styled.h2`
  color: #0b034f;
  font-size: 30px;
  font-weight: 300;
  font-family: Inter;
  text-align: center;
  line-height: 1.3;
`;

export const DMADescription = styled.p`
  font-family: Inter;
  font-size: 19px;
  line-height: 30px;
  color: #54595f;
  margin-bottom: 1.75em;
`;
