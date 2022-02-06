import styled from "styled-components";

export const Wrapper = styled.div({
  padding: "0 40px 40px",
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-around",
});

export const Title = styled.h1({
  width: "100%",
  height: "400px",
  fontSize: "50px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  zIndex: 2,
});
