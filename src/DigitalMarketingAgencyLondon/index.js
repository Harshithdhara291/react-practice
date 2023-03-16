import {
    DMALContainer,
    DMALTitle,
    DMALLeftContainer,
    DMALDescription,
    DMALRightContainer,
    DMALProposalFormTitle,
    DMALProposalFormContainer,
    DMALProposalFormSpan,
    DMALProposalFormName,
    DMALProposalFormBtn,
  } from "./DMALStyledComponents";
  
  const DigitalMarketingAgencyLondon = () => (
    <DMALContainer>
      <DMALLeftContainer>
        <DMALTitle>
          Searching for a Trusted <b>Digital Marketing Agency</b> in <b>London</b>
          you can trust and grow with? Get a FREE proposal from us!
        </DMALTitle>
        <DMALDescription>
          Look no further - we're here to help your business succeed! With more
          than 5+ years of experience, we're a bunch of tech-friendly creative
          thinkers, designers, marketing professionals who focus on result-driven
          branding strategies to grow your business sustainably. As a pioneer in
          Website Designing, App Development, Graphic designing, SEO, and PPC,
          Prabisha Consulting prides itself on generating massive amounts of
          sales, revenue, brand awareness, and website traffic for numerous
          brands. Our professional team works on real-time results & provides
          healthy data for every marketing campaign. Contact us if you are looking
          for UK digital marketing companies! At our company, we are able to
          provide our clients with a clear and concise game plan for achieving
          their revenue goals.
        </DMALDescription>
        <DMALDescription>
          Prabisha offers comprehensive digital marketing solutions for small
          businesses. We help small businesses grow their online presence and
          reach their target audience. Our team of experts creates customised
          strategies that align with your goals and budget, giving you a
          competitive edge in the digital world. Trust Prabisha to help you build
          a strong online brand and drive results. If you are interested in seeing
          what we can do for you, simply request a free strategy proposal from us
          today.
        </DMALDescription>
      </DMALLeftContainer>
      <DMALRightContainer>
        <DMALProposalFormContainer>
          <DMALProposalFormTitle>
            Get your free proposal
            <DMALProposalFormSpan>from us!</DMALProposalFormSpan>
          </DMALProposalFormTitle>
          <DMALProposalFormName placeholder="Name" />
          <DMALProposalFormName placeholder="Email" />
          <DMALProposalFormName placeholder="Mobile" />
          <DMALProposalFormName placeholder="Service" />
          <DMALProposalFormBtn>Submit</DMALProposalFormBtn>
        </DMALProposalFormContainer>
      </DMALRightContainer>
    </DMALContainer>
  );
  
  export default DigitalMarketingAgencyLondon;
  