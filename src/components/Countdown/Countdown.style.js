import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #4a90e2 0%,
    #87ceeb 50%,
    #4a90e2 100%
  );
  padding: 80px 20px;
  position: relative;
  overflow: hidden;

  /* Decorative animated background */
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: pulse 8s ease-in-out infinite;
  }

  &::before {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }

  &::after {
    width: 500px;
    height: 500px;
    bottom: -150px;
    left: -150px;
    animation-delay: 2s;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.1;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 16px;
  }

  @media (max-width: 480px) {
    padding: 50px 12px;
  }
`;

export const Title = styled.h2`
  font-family: 'Great Vibes', 'Satisfy', cursive;
  font-size: clamp(2.5rem, 6vw, 3.8rem);
  font-weight: 400;
  color: white;
  text-align: center;
  margin: 0 0 3.5rem 0;
  letter-spacing: 2px;
  text-shadow: 
    2px 2px 8px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(255, 255, 255, 0.3);
  animation: fadeInDown 0.8s ease-out;
  position: relative;
  z-index: 1;

  /* Heart decoration */
  &::before {
    content: '💕';
    display: block;
    font-size: 2.5rem;
    margin-bottom: 15px;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
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
    margin-bottom: 2.5rem;

    &::before {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
`;

export const TimerBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease-out 0.3s both;

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

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 16px;
    padding: 25px 30px;
    min-width: 110px;
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.15),
      0 5px 15px rgba(74, 144, 226, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    /* Shine effect */
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 70%
      );
      transform: rotate(45deg);
      animation: shine 3s ease-in-out infinite;
    }

    @keyframes shine {
      0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
      }
      100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
      }
    }

    &:hover {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.2),
        0 8px 20px rgba(74, 144, 226, 0.3);
    }
  }

  @media (max-width: 768px) {
    gap: 15px;

    > div {
      padding: 20px 25px;
      min-width: 100px;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;

    > div {
      padding: 18px 20px;
      min-width: 75px;
      border-radius: 12px;
    }
  }

  @media (max-width: 360px) {
    gap: 10px;

    > div {
      padding: 15px 18px;
      min-width: 70px;
    }
  }
`;

export const Number = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #4a90e2;
  line-height: 1;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

export const Label = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 500;
  color: #2c5f8d;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
`;