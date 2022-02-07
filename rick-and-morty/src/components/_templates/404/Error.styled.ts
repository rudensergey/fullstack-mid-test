import styled from "styled-components";

export const ImageWrapper = styled.div({
  position: "relative",
  width: "250px",
  height: "250px",
  padding: "100px",
  boxSizing: "border-box",
});

export const Wrapper = styled.div({
  width: "100vw",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#212c3a",
});

export const Title = styled.p({
  color: "white",
  fontSize: "20px",
});
