"use client"
import React from "react";
import { createPortal } from "react-dom";
import { NavWrapper, NavItem, Icon } from "./BottomNav.style";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const BottomNav = React.memo(() => {
  return createPortal(
    <NavWrapper>
      <NavItem onClick={() => scrollToId("home")}>
        <Icon>🏠</Icon>
        <span>Home</span>
      </NavItem>

      <NavItem onClick={() => scrollToId("gallery")}>
        <Icon>🖼️</Icon>
        <span>Gallery</span>
      </NavItem>

      <NavItem onClick={() => scrollToId("story")}>
        <Icon>📖</Icon>
        <span>Story</span>
      </NavItem>

      <NavItem onClick={() => scrollToId("wish")}>
        <Icon>💬</Icon>
        <span>Ucapan</span>
      </NavItem>
    </NavWrapper>,
    document.body // taruh di body agar terpisah dari countdown
  );
});

export default BottomNav;
