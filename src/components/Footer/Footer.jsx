import React from "react";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      © {year} Dibuat oleh{" "}
      <a
        href="https://www.instagram.com/umkmsukabumi.web"
        target="_blank"
        rel="noopener noreferrer"
      >
        UMKM Sukabumi
      </a>
      .
    </FooterContainer>
  );
};

export default Footer;
