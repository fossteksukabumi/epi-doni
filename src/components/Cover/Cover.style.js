import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f0f8ff 50%,
    #e6f7ff 100%
  );
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  /* Decorative elements */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(135, 206, 250, 0.15) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  &::before {
    top: -100px;
    left: -100px;
  }

  &::after {
    bottom: -100px;
    right: -100px;
  }

  @media (max-width: 768px) {
    padding: 50px 16px;
  }

  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

export const Photo = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-bottom: 2.5rem;
  animation: fadeInScale 1s ease-out;
  z-index: 1;

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Decorative border */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #87ceeb;
    border-radius: 50%;
    animation: rotate 20s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Inner decorative circle */
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid rgba(74, 144, 226, 0.3);
    border-radius: 50%;
    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 10px 40px rgba(74, 144, 226, 0.3);
    border: 5px solid white;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 360px) {
    width: 200px;
    height: 200px;
  }
`;

export const Names = styled.h1`
  font-family: 'Great Vibes', 'Satisfy', cursive;
  font-size: clamp(3rem, 8vw, 5rem);
  color: #4a90e2;
  text-align: center;
  margin: 0 0 1rem 0;
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(135, 206, 250, 0.3);
  animation: fadeInDown 1.2s ease-out 0.3s both;
  z-index: 1;

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
    margin-bottom: 0.8rem;
    letter-spacing: 1px;
  }
`;

export const WeddingDate = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 300;
  color: #2c5f8d;
  text-align: center;
  margin: 0 0 2rem 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: fadeIn 1.5s ease-out 0.6s both;
  z-index: 1;
  position: relative;

  /* Decorative dots */
  &::before,
  &::after {
    content: '•';
    color: #87ceeb;
    font-size: 1.5rem;
    margin: 0 15px;
    vertical-align: middle;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    letter-spacing: 2px;
    margin-bottom: 1.5rem;

    &::before,
    &::after {
      margin: 0 10px;
      font-size: 1.2rem;
    }
  }
`;

export const Divider = styled.div`
  width: 150px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #87ceeb 50%,
    transparent 100%
  );
  margin: 0 auto;
  animation: expandWidth 1.5s ease-out 0.9s both;
  z-index: 1;
  position: relative;

  /* Decorative center dot */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #4a90e2;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(135, 206, 250, 0.3);
  }

  @keyframes expandWidth {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 150px;
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    width: 120px;

    @keyframes expandWidth {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 120px;
        opacity: 1;
      }
    }
  }
`;