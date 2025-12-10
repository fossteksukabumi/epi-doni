import styled from "styled-components";

export const ListWrapper = styled.div`
  max-width: 600px;
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

  > p {
    text-align: center;
    color: #2c5f8d;
    font-size: 1.05rem;
    opacity: 0.7;
    padding: 40px 20px;
  }
`;

export const CommentCard = styled.div`
  display: flex;
  gap: 15px;
  background: white;
  border-radius: 16px;
  padding: 25px 28px;
  margin-bottom: 15px;
  box-shadow: 
    0 5px 20px rgba(74, 144, 226, 0.08),
    0 2px 8px rgba(135, 206, 250, 0.05);
  border: 1px solid rgba(135, 206, 250, 0.15);
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease-out both;
  animation-delay: calc(var(--card-index, 0) * 0.05s);

  &:nth-child(1) { --card-index: 1; }
  &:nth-child(2) { --card-index: 2; }
  &:nth-child(3) { --card-index: 3; }
  &:nth-child(4) { --card-index: 4; }
  &:nth-child(5) { --card-index: 5; }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 8px 25px rgba(74, 144, 226, 0.12),
      0 4px 12px rgba(135, 206, 250, 0.08);
    border-color: rgba(74, 144, 226, 0.25);
  }

  @media (max-width: 480px) {
    padding: 20px 22px;
    gap: 12px;
    border-radius: 12px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a90e2, #87ceeb);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  text-transform: uppercase;

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
`;

export const Name = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: #4a90e2;
  margin: 0 0 8px 0;

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

export const Message = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  line-height: 1.6;
  color: #2c5f8d;
  margin: 0 0 8px 0;
  word-wrap: break-word;

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

export const Timestamp = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  color: rgba(44, 95, 141, 0.6);
  display: block;

  &::before {
    content: '🕐';
    margin-right: 5px;
    font-size: 0.9em;
  }
`;