import styled from "styled-components";
import "typeface-raleway";

export const ServicesCardsContainer = styled.div`
  @media (min-width: 900px) {
    min-height: 200px;
    padding-left: 120px;
    padding-right: 100px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 130px;
    font-family: "Raleway", sans-serif;
    background-color: #d5d1f678;
  }
  @media (max-width: 900px) {
    min-height: 200px;
    padding-left: 9px;
    padding-right: 9px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 130px;
    font-family: "Raleway", sans-serif;
    background-color: #d5d1f678;
  }
`;
