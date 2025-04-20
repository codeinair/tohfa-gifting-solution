import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3a3a3a;
    --secondary-color: #c99038; /* Primary gold color */
    --accent-color: #aa7b2c; /* Slightly darker gold for accent/secondary */
    --background-color: #ffffff;
    --background-alt-color: #f8f9fa;
    --text-color: #333333;
    --text-light-color: #6c757d;
    --border-color: #e9ecef;
    --transition-slow: 0.5s ease;
    --transition-normal: 0.3s ease;
    --transition-fast: 0.2s ease;
    --border-radius: 8px;
    --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: color var(--transition-normal);
  }

  a:hover {
    color: var(--accent-color);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: all var(--transition-normal);
    text-align: center;
    text-decoration: none;
    
    &:hover {
      background-color: var(--accent-color);
      transform: translateY(-2px);
      box-shadow: var(--box-shadow);
    }
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    
    &:hover {
      background-color: var(--secondary-color);
      color: white;
    }
  }
`;

export default GlobalStyles;