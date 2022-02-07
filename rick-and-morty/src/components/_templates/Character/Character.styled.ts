import styled from "styled-components";

export const Wrapper = styled.div({
  padding: "40px",
  boxSizing: "border-box",
});

export const Title = styled.p({
  marginBottom: "30px",
  color: "white",
  fontSize: "30px",
});

export const CharacterCore = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "150px 0 40px",
});

export const Image = styled.img({
  height: "200px",
  width: "200px",
  borderRadius: "50%",
});

export const CharacterCoreWrapper = styled.div({
  height: "120px",
  width: "100%",
  marginLeft: "40px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

export const Name = styled.p({
  fontSize: "40px",
  color: "white",
  fontWeight: "bold",
  textOverflow: "ellipsis",
  overflow: "hidden",
});
