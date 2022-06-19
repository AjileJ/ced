import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/how">How It Works</FooterLink>
              <FooterLink to="/contact"> Contact</FooterLink>
              <FooterLink to="/gallery"> Gallery</FooterLink>
              <FooterLink to="/terms"> Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
