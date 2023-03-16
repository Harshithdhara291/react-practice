import { useState } from "react";
import {
  Section1,
  IconSection,
  ContactInfo1,
  ContactInfo2,
  Text,
  ContactContainer,
  Section2,
  Section21,
  Section2logo,
  Section2NavItems,
  NavItem,
  TextSection,
  Text1,
  SpanText,
  Info,
  Text2,
  Section3,
  ButtonsContainer,
  Button,
  Section4,
  Section41,
  Section41Heading,
  Section41Container,
  Section42,
  Section42Info,
  Section5,
  Section51Container,
  ClickableButtonContainer,
  ClickableButton,
  MobileSectionNavbar,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
  Menu,
  Sidebar,
  CloseButton,
} from "./TopSectionStyledComponents";

// import { ImLinkedin2 } from "react-icons/im";

const TopSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Section1>
        <IconSection>
          <LinkedinIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </IconSection>
        <ContactContainer>
          <ContactInfo1>
            <PhoneIcon />
            <Text>+44(0)7867090363</Text>
          </ContactInfo1>
          <ContactInfo2>
            <MailIcon />
            <Text>care@prabisha.co.uk</Text>
          </ContactInfo2>
        </ContactContainer>
      </Section1>
      <Section2>
        <MobileSectionNavbar>
          <Section2logo href="prabisha.co.uk">
            <img
              className="logo"
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </Section2logo>
          <Menu onClick={toggleMenu} />
          <Sidebar style={{ width: isOpen ? "250px" : "0" }}>
            <CloseButton onClick={closeMenu}>×</CloseButton>

            <NavItem>HOME</NavItem>
            <NavItem>SERVICES</NavItem>
            <NavItem>PORTFOLIO</NavItem>
            <NavItem>CASE STUDIES</NavItem>
            <NavItem>BLOG</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>CONTACT</NavItem>
          </Sidebar>
        </MobileSectionNavbar>
        <Section21>
          <Section2logo href="prabisha.co.uk">
            <img
              className="logo"
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png"
              alt="logo"
            />
          </Section2logo>
          <Section2NavItems>
            <NavItem>HOME</NavItem>
            <NavItem>SERVICES</NavItem>
            <NavItem>PORTFOLIO</NavItem>
            <NavItem>CASE STUDIES</NavItem>
            <NavItem>BLOG</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>CONTACT</NavItem>
          </Section2NavItems>
        </Section21>
        <TextSection>
          <Text1>
            We help you <SpanText>SCALE UP </SpanText>your{" "}
            <SpanText>
              BUSINESS <br />{" "}
            </SpanText>
            and make your <SpanText>BRAND STAND OUT </SpanText>
          </Text1>
          <Info>
            Prabisha Consulting is a globally recognised & Digital Marketing
            Agency in London
          </Info>
          <Text2>
            Servicing 400<sup>+</sup> Brands Globally
          </Text2>
          <Text1>
            Your Business Partner That Drives <SpanText>Revenue</SpanText> |
            Success | <SpanText>Visibility</SpanText>| Quality
          </Text1>
        </TextSection>
      </Section2>
      <Section3>
        <Info>
          We're digital growth influencers, passionate about driving revenue &
          building brand with our transparent & impactful 360-degree digital
          marketing resources. Choose Prabisha Consulting as your marketing
          expert to skyrocket your brand's ecoversions & online visibility.
        </Info>
        <ButtonsContainer>
          <Button>LEARN MORE</Button>
          <Button>GET A FREE QUOTE</Button>
        </ButtonsContainer>
      </Section3>
      <Section4>
        <Section41>
          <Section41Heading>
            Empowering Businesses
            <br /> with Effective
          </Section41Heading>
          <Section41Container>Digital Marketing Campaigns</Section41Container>
        </Section41>
        <Section42>
          <Section42Info>
            Established in 2018, Prabisha Consulting is a fast-growing,
            technology-driven company offering Innovative, High Quality,
            Dependable and Affordable Business Growth Solutions to its valued
            customers across the globe. It has a highly experienced and
            professional team that specialises in the areas of IT Services
            (Website and Mobile App Development), Digital Marketing (SEO, Social
            Media Marketing, Content Development), and Corporate Branding
            (Graphic Design and Video Production). Prabisha helps 400+
            Start-ups, Medium and small-sized companies, and entrepreneurs
            accelerate their business growth and digital transformation! As a
            professional digital marketing agency in London, Prabisha team
            provides customisable services to London, Prabisha team provides
            customisable services to enhance marketing goals.
          </Section42Info>
        </Section42>
      </Section4>
      <Section5>
        <Section51Container>We are Start-up Strategists</Section51Container>
        <Section51Container>We are Digital Transformers</Section51Container>
        <Section51Container>We are Inventive Thinkers</Section51Container>
        <Section51Container>
          We are Passionate Growth Hackers
        </Section51Container>
        <Section51Container>
          We are Compannions of Brands's Success
        </Section51Container>
        <Section51Container>
          We are Tech-enabled Marketing Consultants
        </Section51Container>
      </Section5>
      <ClickableButtonContainer>
        <ClickableButton>GET A FREE PROPOSAL</ClickableButton>
      </ClickableButtonContainer>
    </>
  );
};

export default TopSection;
