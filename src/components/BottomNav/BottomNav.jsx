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
        Home
      </NavItem>

      <NavItem onClick={() => scrollToId("gallery")}>
        <Icon>🖼️</Icon>
        Gallery
      </NavItem>

      <NavItem onClick={() => scrollToId("story")}>
        <Icon>📖</Icon>
        Story
      </NavItem>

      <NavItem onClick={() => scrollToId("wish")}>
        <Icon>💬</Icon>
        Ucapan
      </NavItem>
    </NavWrapper>,
    document.body // taruh di body agar terpisah dari countdown
  );
});

export default BottomNav;

