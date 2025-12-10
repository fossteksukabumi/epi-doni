import React from "react";
import { NavWrapper, NavItem, Icon } from "./BottomNav.style";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  // jika parent scrollable, ganti target: el.scrollIntoView({ behavior: "smooth", block: "start" })
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const BottomNav = () => {
  return (
    <NavWrapper>
      <NavItem as="button" onClick={() => scrollToId("home")}>
        <Icon>🏠</Icon>
        <span>Home</span>
      </NavItem>

      <NavItem as="button" onClick={() => scrollToId("gallery")}>
        <Icon>🖼️</Icon>
        <span>Gallery</span>
      </NavItem>

      <NavItem as="button" onClick={() => scrollToId("story")}>
        <Icon>📖</Icon>
        <span>Story</span>
      </NavItem>

      <NavItem as="button" onClick={() => scrollToId("wish")}>
        <Icon>💬</Icon>
        <span>Ucapan</span>
      </NavItem>
      </NavWrapper>
  );
};

export default BottomNav;
