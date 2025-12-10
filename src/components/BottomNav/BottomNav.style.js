import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 20px 15px;
  box-shadow: 0 -5px 20px rgba(74, 144, 226, 0.15);
  border-top: 2px solid rgba(135, 206, 250, 0.3);
  z-index: 999;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);

  @media (max-width: 480px) {
    padding: 10px 15px 12px;
  }

  /* For devices with notch */
  @supports (padding: max(0px)) {
    padding-bottom: max(15px, env(safe-area-inset-bottom));
  }
`;

export const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Poppins', sans-serif;
  color: #2c5f8d;

  span {
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  /* Active/Hover background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #e6f7ff, #f0f8ff);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover,
  &:active {
    color: #4a90e2;
    transform: translateY(-3px);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    gap: 4px;

    span {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 360px) {
    padding: 5px 6px;

    span {
      display: none; /* Hide text on very small screens */
    }
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${NavItem}:hover &,
  ${NavItem}:active & {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;