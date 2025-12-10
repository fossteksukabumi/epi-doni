import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f0f8ff 50%, #e6f7ff 100%);
`;

export const Title = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: #4a90e2;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1200px;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  cursor: pointer;
`;

export const ModalImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
`;

export const CloseBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10001;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: #4a90e2;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


