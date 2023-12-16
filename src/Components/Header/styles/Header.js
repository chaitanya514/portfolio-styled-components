import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const HeaderBar = styled.section`
  padding: 4em;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  color: #ff9c1b;
  font-family: "Mr Dafoe", cursive;
`;

export const ThemeToggle = styled.div`
  background: #ebf2fa;
  border-radius: 50%;
  padding: 10px 12px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
