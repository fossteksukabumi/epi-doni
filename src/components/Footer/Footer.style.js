// Footer.style.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #4a90e2 0%, #87ceeb 100%);
  color: white;
  text-align: center;
  padding: 30px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: 400;
  letter-spacing: 0.5px;
  box-shadow: 0 -5px 20px rgba(74, 144, 226, 0.2);
  position: relative;
  margin-top: 80px;

  /* Decorative wave top */
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    height: 30px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 30'%3E%3Cpath fill='%234a90e2' d='M0,20 Q300,0 600,15 T1200,20 L1200,30 L0,30 Z'/%3E%3C/svg%3E") repeat-x;
    background-size: cover;
  }

  /* Heart decoration */
  &::after {
    content: '💙';
    display: block;
    font-size: 1.5rem;
    margin-top: 10px;
    animation: heartPulse 2s ease-in-out infinite;
  }

  @keyframes heartPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
  }

  @media (max-width: 480px) {
    padding: 25px 16px;
    margin-top: 60px;
    font-size: 0.85rem;

    &::after {
      font-size: 1.3rem;
      margin-top: 8px;
    }
  }
`;