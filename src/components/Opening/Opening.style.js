import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(135, 206, 250, 0.85) 0%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(135, 206, 250, 0.85) 100%
  );
  z-index: 1;
`;

export const Names = styled.h1`
  position: relative;
  z-index: 2;
  font-family: 'Great Vibes', 'Satisfy', cursive;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  color: #4a90e2;
  text-align: center;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
  animation: fadeInDown 1s ease-out;

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
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  font-family: 'Poppins', 'Roboto', sans-serif;
  font-size: clamp(1rem, 3.5vw, 1.3rem);
  font-weight: 300;
  color: #2c5f8d;
  text-align: center;
  margin: 0 0 2.5rem 0;
  max-width: 90%;
  line-height: 1.6;
  letter-spacing: 1px;
  animation: fadeIn 1.5s ease-out 0.3s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    max-width: 85%;
    margin-bottom: 2rem;
  }
`;

export const ButtonOpen = styled.button`
  position: relative;
  z-index: 2;
  font-family: 'Poppins', 'Roboto', sans-serif;
  font-size: clamp(1rem, 3vw, 1.1rem);
  font-weight: 500;
  color: white;
  background: linear-gradient(135deg, #4a90e2 0%, #87ceeb 100%);
  border: none;
  border-radius: 50px;
  padding: 15px 45px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(74, 144, 226, 0.4);
  transition: all 0.3s ease;
  letter-spacing: 1px;
  animation: fadeInUp 1.5s ease-out 0.6s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(74, 144, 226, 0.6);
    background: linear-gradient(135deg, #5ba3f5 0%, #9dd9f7 100%);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(74, 144, 226, 0.5);
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

  @media (max-width: 480px) {
    padding: 13px 35px;
    font-size: 1rem;
  }
`;