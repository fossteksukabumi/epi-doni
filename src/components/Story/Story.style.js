import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #e6f7ff 0%,
    #ffffff 50%,
    #f0f8ff 100%
  );
  padding: 80px 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }

  @media (max-width: 480px) {
    padding: 50px 12px;
  }
`;

export const Title = styled.h2`
  font-family: 'Great Vibes', 'Satisfy', cursive;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 400;
  color: #4a90e2;
  text-align: center;
  margin: 0 0 4rem 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(135, 206, 250, 0.2);
  animation: fadeInDown 0.8s ease-out;
  position: relative;
  z-index: 1;

  &::before {
    content: '📖';
    display: block;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #87ceeb 50%,
      transparent 100%
    );
    margin: 20px auto 0;
    border-radius: 2px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 3rem;

    &::before {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    &::after {
      width: 70px;
      margin-top: 15px;
    }
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      #87ceeb 10%,
      #87ceeb 90%,
      transparent 100%
    );
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border: 4px solid #4a90e2;
  border-radius: 50%;
  box-shadow: 
    0 0 0 6px rgba(135, 206, 250, 0.2),
    0 5px 15px rgba(74, 144, 226, 0.3);
  z-index: 2;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: #4a90e2;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    left: 30px;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    border-width: 3px;

    &::before {
      width: 10px;
      height: 10px;
    }
  }
`;

export const DateText = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  color: #4a90e2;
  margin: 0 0 12px 0;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #87ceeb;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    padding-bottom: 10px;

    &::after {
      width: 40px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  background: white;
  padding: 30px 35px;
  border-radius: 16px;
  box-shadow: 
    0 8px 25px rgba(74, 144, 226, 0.12),
    0 4px 10px rgba(135, 206, 250, 0.08);
  border: 1px solid rgba(135, 206, 250, 0.2);
  margin-left: calc(50% + 60px);
  position: relative;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -15px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid white;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 12px 35px rgba(74, 144, 226, 0.18),
      0 6px 15px rgba(135, 206, 250, 0.12);
    border-color: rgba(74, 144, 226, 0.3);
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.95rem, 2.2vw, 1.05rem);
    line-height: 1.8;
    color: #2c5f8d;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-left: 80px;
    margin-right: 0;
    padding: 25px 28px;
    text-align: left;

    &::before {
      top: 50%;
      transform: translateY(-50%);
      left: -15px;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 15px solid white;
      border-left: none;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 22px;
    border-radius: 12px;
    margin-left: 70px;

    &::before {
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 12px solid white;
      left: -12px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: calc(var(--item-index, 0) * 0.2s);

  &:nth-child(1) { --item-index: 1; }
  &:nth-child(2) { --item-index: 2; }
  &:nth-child(3) { --item-index: 3; }

  &:last-child {
    margin-bottom: 0;
  }

  /* Even items - alternate side */
  &:nth-child(even) {
    flex-direction: row-reverse;

    ${Circle} {
      left: auto;
      right: 50%;
      transform: translateX(50%);
    }

    ${Content} {
      margin-left: 0;
      margin-right: calc(50% + 60px);
      text-align: right;

      &::before {
        left: auto;
        right: -15px;
        border-right: none;
        border-left: 15px solid white;
      }
    }

    ${DateText}::after {
      left: auto;
      right: 0;
    }
  }

  /* Hover effect on circle */
  &:hover ${Circle} {
    transform: translateX(-50%) scale(1.2);
    background: #4a90e2;

    &::before {
      background: white;
    }
  }

  &:nth-child(even):hover ${Circle} {
    transform: translateX(50%) scale(1.2);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row !important;

    ${Circle} {
      left: 30px !important;
      right: auto !important;
      top: 50%;
      transform: translate(-50%, -50%) !important;
    }

    ${Content} {
      margin-left: 80px !important;
      margin-right: 0 !important;
      text-align: left !important;

      &::before {
        left: -15px !important;
        right: auto !important;
        top: 50%;
        transform: translateY(-50%);
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 15px solid white !important;
        border-left: none !important;
      }
    }

    ${DateText}::after {
      left: 0 !important;
      right: auto !important;
    }

    &:hover ${Circle} {
      transform: translate(-50%, -50%) scale(1.2) !important;
    }
  }

  @media (max-width: 480px) {
    ${Content} {
      margin-left: 70px !important;
    }
  }
`;