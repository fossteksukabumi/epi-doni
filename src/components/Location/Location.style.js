import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #f0f8ff 0%,
    #ffffff 30%,
    #e6f7ff 100%
  );
  padding: 80px 20px;
  position: relative;

  /* Decorative elements */
  &::before {
    content: '📍';
    position: absolute;
    top: 40px;
    right: 10%;
    font-size: 3rem;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    content: '🗺️';
    position: absolute;
    bottom: 40px;
    left: 10%;
    font-size: 3rem;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 768px) {
    padding: 60px 16px;

    &::before,
    &::after {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 50px 12px;

    &::before {
      top: 30px;
      right: 5%;
    }

    &::after {
      bottom: 30px;
      left: 5%;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Great Vibes', 'Satisfy', cursive;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 400;
  color: #4a90e2;
  text-align: center;
  margin: 0 0 2rem 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(135, 206, 250, 0.2);
  animation: fadeInDown 0.8s ease-out;
  position: relative;
  z-index: 1;

  /* Location icon */
  &::before {
    content: '📍';
    display: block;
    font-size: 2.5rem;
    margin-bottom: 10px;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Decorative underline */
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
    margin-bottom: 1.5rem;

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

export const Address = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.8vw, 1.2rem);
  font-weight: 400;
  color: #2c5f8d;
  text-align: center;
  line-height: 2;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  padding: 30px 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 8px 25px rgba(74, 144, 226, 0.12),
    0 4px 10px rgba(135, 206, 250, 0.08);
  border: 1px solid rgba(135, 206, 250, 0.2);
  position: relative;
  animation: fadeIn 1s ease-out 0.3s both;
  z-index: 1;

  /* Decorative quotes */
  &::before,
  &::after {
    font-family: Georgia, serif;
    font-size: 3rem;
    color: rgba(135, 206, 250, 0.3);
    position: absolute;
  }

  &::before {
    content: '"';
    top: 5px;
    left: 15px;
  }

  &::after {
    content: '"';
    bottom: -5px;
    right: 15px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    max-width: 500px;
    padding: 25px 35px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 20px 25px;
    line-height: 1.8;
    font-size: 0.95rem;

    &::before,
    &::after {
      font-size: 2rem;
    }

    &::before {
      top: 0;
      left: 10px;
    }

    &::after {
      bottom: -10px;
      right: 10px;
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 450px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 15px 40px rgba(74, 144, 226, 0.2),
    0 8px 20px rgba(135, 206, 250, 0.15);
  border: 5px solid white;
  position: relative;
  animation: fadeInUp 1s ease-out 0.5s both;
  z-index: 1;
  transition: all 0.4s ease;

  /* Decorative frame corners */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border: 3px solid #87ceeb;
    z-index: 2;
    transition: all 0.4s ease;
  }

  &::before {
    top: -3px;
    left: -3px;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 20px;
  }

  &::after {
    bottom: -3px;
    right: -3px;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 20px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 20px 50px rgba(74, 144, 226, 0.25),
      0 12px 25px rgba(135, 206, 250, 0.2);

    &::before,
    &::after {
      width: 60px;
      height: 60px;
      border-color: #4a90e2;
    }
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

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    height: 400px;

    &::before,
    &::after {
      width: 40px;
      height: 40px;
    }

    &:hover::before,
    &:hover::after {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 300px;
    border-radius: 16px;
    border-width: 3px;

    &::before,
    &::after {
      width: 30px;
      height: 30px;
      border-width: 2px;
    }

    &::before {
      border-top-left-radius: 16px;
    }

    &::after {
      border-bottom-right-radius: 16px;
    }

    &:hover::before,
    &:hover::after {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 360px) {
    height: 280px;
  }
`;