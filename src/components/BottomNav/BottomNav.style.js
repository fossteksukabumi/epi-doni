import styled from "styled-components";

export const NavWrapper = styled.nav`
  /* CRITICAL: Use position fixed with explicit dimensions */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 70px; /* Fixed height prevents any shift */
  
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  box-shadow: 0 -5px 20px rgba(74, 144, 226, 0.15);
  border-top: 2px solid rgba(135, 206, 250, 0.3);
  
  /* CRITICAL: Highest z-index and isolation */
  z-index: 10000;
  isolation: isolate;
  
  /* CRITICAL: Prevent any repainting or layout recalculation */
  will-change: auto;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  contain: strict; /* Strictest containment */
  
  /* Font rendering consistency */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  /* Prevent any user interaction shift */
  pointer-events: auto;
  touch-action: manipulation;

  @media (max-width: 480px) {
    height: 65px;
  }

  /* For devices with notch - add safe area */
  @supports (padding: max(0px)) {
    padding-bottom: env(safe-area-inset-bottom);
    height: calc(70px + env(safe-area-inset-bottom));
    
    @media (max-width: 480px) {
      height: calc(65px + env(safe-area-inset-bottom));
    }
  }
`;

export const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  /* Fixed dimensions to prevent shift */
  min-width: 60px;
  min-height: 50px;
  
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 12px;
  
  position: relative;
  font-family: 'Poppins', sans-serif;
  color: #2c5f8d;
  
  /* Prevent layout shift */
  will-change: transform;
  transform: translateZ(0);
  contain: layout style paint;
  
  /* Remove tap effects that might cause shift */
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  
  /* Smooth transitions only for visual effects */
  transition: color 0.2s ease, transform 0.2s ease;

  span {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.3px;
    line-height: 1;
    
    /* Prevent text shift */
    display: block;
    text-align: center;
  }

  /* Hover background */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #e6f7ff, #f0f8ff);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: -1;
    pointer-events: none;
  }

  &:hover,
  &:active {
    color: #4a90e2;
    transform: translateY(-2px) translateZ(0);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0) translateZ(0);
  }

  @media (max-width: 480px) {
    min-width: 55px;
    min-height: 45px;
    padding: 5px 8px;
    gap: 3px;

    span {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 360px) {
    min-width: 50px;
    
    span {
      display: none;
    }
  }
`;

export const Icon = styled.span`
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Fixed size to prevent emoji shift */
  width: 1.4rem;
  height: 1.4rem;
  
  /* Smooth scale only */
  transition: transform 0.2s ease;
  will-change: transform;
  
  ${NavItem}:hover &,
  ${NavItem}:active & {
    transform: scale(1.15) translateZ(0);
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
    width: 1.4rem;
    height: 1.4rem;
  }
`;
