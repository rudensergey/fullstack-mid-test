import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  background-image: url("https://images5.alphacoders.com/876/876590.png");
  background-size: cover;
  background-position: center;
  transition: all;
  transition-duration: 0.2s;

  @media (max-width: 600px) {
    height: 250px;
  }
`;
