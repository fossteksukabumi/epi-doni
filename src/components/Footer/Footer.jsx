import React from "react";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      © {year} Dibuat oleh UMKM Sukabumi.
    </FooterContainer>
  );
};

export default Footer;
