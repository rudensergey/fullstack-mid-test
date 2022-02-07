import styled from "styled-components";

export const Wrapper = styled(
  styled.div({
    maxWidth: "230px",
    padding: "15px 15px",
    margin: "10px",
    boxSizing: "border-box",
    textAlign: "left",
    backgroundColor: "#30373a",
    borderRadius: "5px",
    display: "grid",
    gridTemplateRows: "170px auto 50px",
    gridTemplateColumns: "170px",
    transition: "all",
    transitionDuration: "0.2s",
  })
)`
  &:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.062);
  }
`;

export const ImageWrapper = styled.div({
  height: "170px",
  width: "170px",
});

export const TextBlock = styled.div({
  padding: "15px 0",
  height: "100px",
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
});
