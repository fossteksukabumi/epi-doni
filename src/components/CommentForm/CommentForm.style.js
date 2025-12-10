import styled from "styled-components";

export const FormWrapper = styled.form`
  background: white;
  border-radius: 20px;
  padding: 35px 40px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto 40px;
  box-shadow: 
    0 10px 30px rgba(74, 144, 226, 0.12),
    0 4px 10px rgba(135, 206, 250, 0.08);
  border: 1px solid rgba(135, 206, 250, 0.2);
  animation: fadeInUp 0.8s ease-out;

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
    padding: 30px 35px;
  }

  @media (max-width: 480px) {
    padding: 25px 25px;
    border-radius: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.95rem, 2.5vw, 1.05rem);
  color: #2c5f8d;
  background: #f0f8ff;
  border: 2px solid rgba(135, 206, 250, 0.3);
  border-radius: 12px;
  padding: 15px 20px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  outline: none;

  &::placeholder {
    color: rgba(44, 95, 141, 0.5);
  }

  &:focus {
    border-color: #4a90e2;
    background: white;
    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1);
  }

  @media (max-width: 480px) {
    padding: 13px 18px;
    border-radius: 10px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.95rem, 2.5vw, 1.05rem);
  color: #2c5f8d;
  background: #f0f8ff;
  border: 2px solid rgba(135, 206, 250, 0.3);
  border-radius: 12px;
  padding: 15px 20px;
  margin-bottom: 20px;
  resize: vertical;
  transition: all 0.3s ease;
  outline: none;
  line-height: 1.6;

  &::placeholder {
    color: rgba(44, 95, 141, 0.5);
  }

  &:focus {
    border-color: #4a90e2;
    background: white;
    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1);
  }

  @media (max-width: 480px) {
    min-height: 100px;
    padding: 13px 18px;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2.8vw, 1.1rem);
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #4a90e2 0%, #87ceeb 100%);
  border: none;
  border-radius: 12px;
  padding: 16px 30px;
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

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 144, 226, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 14px 25px;
    border-radius: 10px;
  }
`;
