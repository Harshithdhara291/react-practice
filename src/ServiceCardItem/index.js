import {
    ServiceCardItem1,
    ServiceCardItem2,
    ServiceCardItemImageCard,
    ServiceCardImg,
    ServiceCardTitle1,
    ServiceCardTitle2,
    ServiceCardDescription1,
    ServiceCardDescription2,
  } from "./SCIStyledComponents";
  
  export const ServiceCardItemContainer1 = (props) => {
    const { data } = props;
    console.log(data);
    const { imageUrl, title, description } = data;
    console.log(description);
    return (
      <ServiceCardItem1>
        <ServiceCardItemImageCard>
          <ServiceCardImg src={imageUrl} alt={title} />
        </ServiceCardItemImageCard>
  
        <ServiceCardTitle1>{title}</ServiceCardTitle1>
        <ServiceCardDescription1>{description}</ServiceCardDescription1>
      </ServiceCardItem1>
    );
  };
  
  export const ServiceCardItemContainer2 = (props) => {
    const { data } = props;
    console.log(data);
    const { imageUrl, title, description } = data;
    console.log(description);
    return (
      <ServiceCardItem2>
        <ServiceCardItemImageCard>
          <ServiceCardImg src={imageUrl} alt={title} />
        </ServiceCardItemImageCard>
  
        <ServiceCardTitle2>{title}</ServiceCardTitle2>
        <ServiceCardDescription2>{description}</ServiceCardDescription2>
      </ServiceCardItem2>
    );
  };
  