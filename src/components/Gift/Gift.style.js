import styled from "styled-components";

export const GiftSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #f0f8ff 0%,
    #ffffff 50%,
    #e6f7ff 100%
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

export const GiftTitle = styled.h2`
  font-family: 'Great Vibes', 'Satisfy', cursive;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 400;
  color: #4a90e2;
  text-align: center;
  margin: 0 0 1.5rem 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(135, 206, 250, 0.2);
  animation: fadeInDown 0.8s ease-out;
  position: relative;
  z-index: 1;

  &::before {
    content: '🎁';
    display: block;
    font-size: 2.5rem;
    margin-bottom: 10px;
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
    margin-bottom: 1.2rem;

    &::before {
      font-size: 2rem;
      margin-bottom: 8px;
    }
  }
`;

export const GiftText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 400;
  color: #2c5f8d;
  text-align: center;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 3rem;
  animation: fadeIn 1s ease-out 0.3s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

export const GiftList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out 0.5s both;

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

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const GiftItem = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px 35px;
  box-shadow: 
    0 10px 30px rgba(74, 144, 226, 0.12),
    0 4px 10px rgba(135, 206, 250, 0.08);
  border: 1px solid rgba(135, 206, 250, 0.2);
  position: relative;
  transition: all 0.4s ease;

  &::before {
    content: '💳';
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 1.5rem;
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 15px 40px rgba(74, 144, 226, 0.2),
      0 8px 20px rgba(135, 206, 250, 0.15);
    border-color: rgba(74, 144, 226, 0.3);

    &::before {
      opacity: 0.6;
    }
  }

  @media (max-width: 480px) {
    padding: 25px 28px;
    border-radius: 16px;

    &::before {
      font-size: 1.3rem;
      top: 12px;
      right: 15px;
    }
  }
`;

export const GiftBank = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-weight: 600;
  color: #4a90e2;
  margin: 0 0 15px 0;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`;

export const GiftNumber = styled.p`
  font-family: 'Courier New', monospace;
  font-size: clamp(1.3rem, 3.5vw, 1.6rem);
  font-weight: 700;
  color: #2c5f8d;
  text-align: center;
  margin: 0 0 8px 0;
  letter-spacing: 2px;
  background: #f0f8ff;
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px dashed rgba(135, 206, 250, 0.5);

  @media (max-width: 480px) {
    font-size: 1.15rem;
    letter-spacing: 1px;
    padding: 10px 15px;
  }
`;

export const GiftName = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: 400;
  color: #2c5f8d;
  text-align: center;
  margin: 0 0 20px 0;
  opacity: 0.8;

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }
`;

export const CopyButton = styled.button`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.95rem, 2.5vw, 1.05rem);
  font-weight: 500;
  color: white;
  background: linear-gradient(135deg, #4a90e2 0%, #87ceeb 100%);
  border: none;
  border-radius: 12px;
  padding: 14px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 144, 226, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(74, 144, 226, 0.3);
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    border-radius: 10px;
  }
`;

export const CopiedText = styled.span`
  display: ${(props) => (props.show ? 'block' : 'none')};
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a90e2;
  text-align: center;
  margin-top: 10px;
  animation: fadeInOut 1.5s ease-out;

  &::before {
    content: '✓';
    margin-right: 5px;
    font-size: 1.1em;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    20%, 80% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-5px);
    }
  }
`;