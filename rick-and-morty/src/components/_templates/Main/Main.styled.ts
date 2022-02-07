import styled from "styled-components";

export const Wrapper = styled.div({
  padding: "0 40px 40px",
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-around",
});

export const Title = styled.h1`
  width: 100%;
  height: 400px;
  font-size: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  z-index: 2;
  transition: all;
  transition-duration: 0.2s;

  @media (max-width: 600px) {
    height: 200px;
    font-size: 40px;
    text-align: center;
  }
`;
