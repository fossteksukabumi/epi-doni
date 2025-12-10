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

  /* Decorative background pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(135, 206, 250, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(74, 144, 226, 0.08) 0%, transparent 50%);
    pointer-events: none;
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
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 400;
  color: #4a90e2;
  text-align: center;
  margin: 0 0 3rem 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(135, 206, 250, 0.2);
  animation: fadeInDown 0.8s ease-out;
  position: relative;
  z-index: 1;

  /* Decorative underline */
  &::after {
    content: '';
    display: block;
    width: 80px;
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
    margin-bottom: 2.5rem;

    &::after {
      width: 60px;
      margin-top: 15px;
    }
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 35px 40px;
  margin-bottom: 25px;
  width: 100%;
  max-width: 500px;
  box-shadow: 
    0 10px 30px rgba(74, 144, 226, 0.12),
    0 4px 10px rgba(135, 206, 250, 0.08);
  border: 1px solid rgba(135, 206, 250, 0.2);
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out both;
  animation-delay: calc(var(--card-index, 0) * 0.15s);

  /* Decorative corner elements */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border: 2px solid #87ceeb;
    transition: all 0.4s ease;
  }

  &::before {
    top: 10px;
    left: 10px;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 8px;
  }

  &::after {
    bottom: 10px;
    right: 10px;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 15px 40px rgba(74, 144, 226, 0.2),
      0 8px 20px rgba(135, 206, 250, 0.15);
    border-color: rgba(74, 144, 226, 0.3);

    &::before,
    &::after {
      width: 40px;
      height: 40px;
      border-color: #4a90e2;
    }
  }

  &:first-of-type {
    --card-index: 1;
  }

  &:last-of-type {
    --card-index: 2;
    margin-bottom: 0;
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
    max-width: 450px;
    padding: 32px 35px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 28px 25px;
    margin-bottom: 20px;
    border-radius: 16px;

    &::before,
    &::after {
      width: 25px;
      height: 25px;
    }

    &:hover::before,
    &:hover::after {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Label = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.3rem, 3.5vw, 1.6rem);
  font-weight: 600;
  color: #4a90e2;
  text-align: center;
  margin: 0 0 1.2rem 0;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 12px;

  /* Decorative underline */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #87ceeb 50%,
      transparent 100%
    );
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    padding-bottom: 10px;

    &::after {
      width: 50px;
    }
  }
`;

export const Value = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  font-weight: 400;
  color: #2c5f8d;
  text-align: center;
  margin: 0 0 0.6rem 0;
  line-height: 1.8;
  letter-spacing: 0.3px;

  &:last-child {
    margin-bottom: 0;
  }

  /* Icon for time */
  &:last-child::before {
    content: '🕐';
    margin-right: 8px;
    font-size: 1.1em;
  }

  /* Icon for date */
  &:first-of-type::before {
    content: '📅';
    margin-right: 8px;
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    
    &:first-of-type::before,
    &:last-child::before {
      font-size: 1em;
      margin-right: 6px;
    }
  }
`;