import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    min-height: 100%;
  }
  body {
    background: #7159c1;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #333333;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }

  .container {
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
    position: relative;
  }

  .icon {
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translateX(-50%);
    background: white;
    color: #7159c1;
    width: 80px;
    height: 80px;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 12px 10px -4px rgba(25, 10, 74, 0.23);
  }

  .loader-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    margin: 5rem 0;
  }

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #7159c1 #7159c1 #7159c1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
  }

  @keyframes spin-anim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;
