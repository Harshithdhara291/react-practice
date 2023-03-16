import styled from "styled-components";
import "typeface-raleway";

export const CountSectionContainer = styled.div`
  @media (min-width: 900px) {
    height: 180px;
    background-color: #0b034f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 150px;
    align-items: center;
  }
  @media (max-width: 900px) {
    min-height: 180px;
    background-color: #0b034f;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    align-items: center;
    margin-bottom: 100px;
    padding-bottom: 10px;
  }
`;

export const CountSectionSubContainer = styled.div`
@media (min-width:900px){
  display: flex;
  flex-direction: column;
  border-style:solid:
  border-width:5px;
  width:200px;
  height:110px;
  border-color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

@media (max-width:900px){
  display: flex;
  flex-direction: column;
  border-style:solid:
  width:200px;
  height:110px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
}`;

export const CountTitle = styled.h1`
    font-size:45px;
    color:white;
    font-family:"Raleway":
    margin-bottom:0px;
    

  `;

export const CountDescription = styled.p`
  color: #c99b3b;
  font-size: 23px;
  font-weight: 400;
  margin-top: -20px;
`;
