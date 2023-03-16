import styled from "styled-components";
import "typeface-raleway";

export const HQDGSContainer = styled.h2`
@media (min-width:900px){
    padding-top:80px;
    padding-bottom:80px;
    border-style:solid:
    border-color:blue;
    padding-left:150px;
    padding-right:150px;
}
@media (max-width:900px){
    padding-top:80px;
    padding-bottom:80px;
    border-style:solid;
    border-color:blue;
    padding-left:9px;
    padding-right:9px;
}
`;

export const HQDGSTitle = styled.h2`
  text-align: center;
  color: #0b034f;
  font-size: 30px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;

export const HQDGSDescription = styled.p`
  font-family: "Raleway", sans-serif;
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  padding: 9px;
`;
