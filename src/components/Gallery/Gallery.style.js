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
  margin: 0 0 3rem 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(135, 206, 250, 0.2);
  animation: fadeInDown 0.8s ease-out;
  position: relative;
  z-index: 1;

  /* Camera decoration */
  &::before {
    content: '📷';
    display: block;
    font-size: 2.5rem;
    margin-bottom: 10px;
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
    margin-bottom: 2.5rem;

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  animation: fadeIn 1s ease-out 0.3s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 
    0 8px 25px rgba(74, 144, 226, 0.15),
    0 4px 10px rgba(135, 206, 250, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Decorative border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid transparent;
    border-radius: 16px;
    background: linear-gradient(135deg, #87ceeb, #4a90e2) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 15px 40px rgba(74, 144, 226, 0.25),
      0 8px 20px rgba(135, 206, 250, 0.2);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }

    &::after {
      opacity: 1;
    }
  }

  /* Overlay on hover */
  &::after {
    content: '🔍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }

  @media (max-width: 480px) {
    border-radius: 12px;

    &::before {
      border-radius: 12px;
      border-width: 2px;
    }

    &::after {
      font-size: 2rem;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease-out;
  cursor: pointer;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ModalImg = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.3s ease-out;

  @keyframes zoomIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    max-width: 95%;
    border-radius: 8px;
  }
`;

export const CloseBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  color: #4a90e2;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1001;
  line-height: 1;

  &:hover {
    background: #4a90e2;
    color: white;
    transform: rotate(90deg) scale(1.1);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  @media (max-width: 480px) {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
    font-size: 1.8rem;
  }
`;