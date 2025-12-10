import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap');

  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Poppins', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #2c5f8d;
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: #4a90e2;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  h2 {
    font-size: clamp(1.75rem, 4.5vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  h4 {
    font-size: clamp(1.25rem, 3.5vw, 1.5rem);
  }

  p {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    color: #2c5f8d;
    line-height: 1.8;
  }

  /* Links */
  a {
    color: #4a90e2;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #87ceeb;
    }
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    outline: none;
    border: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 16px;
    }

    @media (max-width: 480px) {
      padding: 0 12px;
    }
  }

  /* Section Spacing */
  section {
    padding: 60px 20px;

    @media (max-width: 768px) {
      padding: 50px 16px;
    }

    @media (max-width: 480px) {
      padding: 40px 12px;
    }
  }

  /* Utility Classes */
  .text-center {
    text-align: center;
  }

  .text-sky-blue {
    color: #87ceeb;
  }

  .text-blue {
    color: #4a90e2;
  }

  .bg-white {
    background-color: #ffffff;
  }

  .bg-sky-blue {
    background-color: #e6f7ff;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f0f8ff;
  }

  ::-webkit-scrollbar-thumb {
    background: #87ceeb;
    border-radius: 4px;

    &:hover {
      background: #4a90e2;
    }
  }

  /* Selection */
  ::selection {
    background-color: #87ceeb;
    color: white;
  }

  ::-moz-selection {
    background-color: #87ceeb;
    color: white;
  }

  /* Accessibility - Focus visible */
  *:focus-visible {
    outline: 2px solid #4a90e2;
    outline-offset: 2px;
  }

  /* Loading Animation (optional) */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Fade animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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

  /* Prevent iOS tap highlight */
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* Safe area for notched devices */
  @supports (padding: max(0px)) {
    body {
      padding-left: max(0px, env(safe-area-inset-left));
      padding-right: max(0px, env(safe-area-inset-right));
    }
  }
`;

export default GlobalStyles;