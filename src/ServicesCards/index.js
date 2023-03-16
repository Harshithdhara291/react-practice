import { ServicesCardsContainer } from "./SCStyledComponents";
import {
  ServiceCardItemContainer1,
  ServiceCardItemContainer2,
} from "../ServiceCardItem";
import React from "react";

const ServiceCardDetails = [
  {
    index: 0,
    imageUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/6.png",
    title: "Website Development",
    description:
      "As one of the fastest growing website development companies in London, we've invested ourselves in delivering a perfect well-built professional website that represents your brand to the world. With advanced technology & CRM, we offer world-class services to our clients. Target your audience with dynamic, responsive & high-quality websites. Being one of the popular web designing agencies in the UK, we develop websites that visually impact your audience to enter the sales funnel.",
    bcolor: "ccode1",
  },
  {
    index: 1,
    imageUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/2.png",
    title: "Mobile App Development",
    description:
      "Prabisha Consulting has expertise in developing web, native & hybrid apps. We help businesses stand out among their competitors & build their remarkable and unique presence. Mobile application development has seen immense growth in recent years, with more and more people using smartphones to perform everyday tasks. Here at our company, we’re the certified professionals in Android and iOS app development. We know how to create user-friendly and eye-catching apps for all sorts of businesses",
    bcolor: "ccode2",
  },
  {
    index: 2,
    imageUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/7.png",
    title: "Corporate Branding",
    description:
      "Nowadays, one of the biggest challenges for entrepreneurs is to find a way to improve brands’ marketing performances further. Prabisha creates a unique identity for the brand; we optimise your marketing plan and enhance brand awareness by developing a perfect corporate branding strategy. Having expertise in marketing collateral designing, our high-skilled graphics team can curate professional, creative & minimalistic graphic design that suits your brand style and individuality.",
    bcolor: "ccode1",
  },
  {
    index: 3,
    imageUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/dm.jpg",
    title: "Digital Marketing",
    description:
      "Prabisha builds brand, Prabisha creates an online presence of the brand. In developing a potential digital marketing plan for your business, we offer the best online marketing strategy to establish brand identity. We go with the trending marketing techniques which help our clients to target customers efficiently and connect with a wide range of audiences. From customised SEO plans to Content marketing, Pay-Per-Click Advertisement, and Social media marketing, we provide ROI-driven strategies to maximise your conversion ratio",
    bcolor: "ccode2",
  },
  {
    index: 4,
    imageUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/5.png",
    title: "Social Media Marketing",
    description:
      "Being socially savvy is about more than just signing up for a profile on Facebook, Instagram, or Twitter. It’s about representing your brand to millions of people with genuinely shareable content that can enhance your social media presence. As a trusted social media marketing agency, we develop high-quality graphics & content that speak for your brand & engage with your targeted customers",
    bcolor: "ccode1",
  },
  {
    index: 5,
    imageUrl: "https://www.prabisha.co.uk/wp-content/uploads/2022/11/1.png",
    title: "Search Engine Optimisation",
    description:
      "SEO, Search Engine Optimisation is the tricky, data-driven, technical strategy that boosts your website presence on search engine result pages. To us, Search Engine Optimisation is the combination of technology & analytics. Prabisha’s solution-oriented SEO strategy can enhance the organic traffic of your website. Analysing your website, our SEO analyst team can tailor the best SEO approach to maximise your return on investment.",
    bcolor: "ccode2",
  },
];

const ServicesCards = () => (
  <ServicesCardsContainer>
    {ServiceCardDetails.map((each) => (
      <React.Fragment key={each.index}>
        {each.bcolor === "ccode1" && (
          <ServiceCardItemContainer1 data={each} key={each.index} />
        )}
        {each.bcolor === "ccode2" && (
          <ServiceCardItemContainer2 data={each} key={each.index} />
        )}
      </React.Fragment>
    ))}
  </ServicesCardsContainer>
);

export default ServicesCards;
