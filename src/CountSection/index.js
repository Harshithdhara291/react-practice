import {
    CountSectionContainer,
    CountSectionSubContainer,
    CountTitle,
    CountDescription,
  } from "./countSectionStyledComponents";
  
  const CountSection = () => (
    <CountSectionContainer>
      <CountSectionSubContainer>
        <CountTitle>1000+</CountTitle>
        <CountDescription>Projects </CountDescription>
      </CountSectionSubContainer>
      <CountSectionSubContainer>
        <CountTitle>300+</CountTitle>
        <CountDescription>Happy Clients</CountDescription>
      </CountSectionSubContainer>
  
      <CountSectionSubContainer>
        <CountTitle>24/7</CountTitle>
        <CountDescription>Quality Work</CountDescription>
      </CountSectionSubContainer>
      <CountSectionSubContainer>
        <CountTitle>100+</CountTitle>
        <CountDescription>Time Delivery</CountDescription>
      </CountSectionSubContainer>
    </CountSectionContainer>
  );
  export default CountSection;
  