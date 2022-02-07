import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  transition: all;
  transition-duration: 0.2s;

  @media (max-width: 600px) {
    height: 250px;
  }
`;
