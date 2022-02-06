import styled from "styled-components";

export const Wrapper = styled(
  styled.div({
    maxWidth: "230px",
    padding: "10px 15px",
    margin: "10px",
    boxSizing: "border-box",
    textAlign: "left",
    backgroundColor: "white",
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

export const Image = styled.img({
  height: "170px",
  width: "170px",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

export const Text = styled.p({
  width: "100%",
  fontSize: "16",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
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

export const Button = styled(
  styled.button({
    fontSize: "20px",
    backgroundColor: "coral",
    border: "none",
    cursor: "pointer",
    transition: "all",
    transitionDuration: "0.2s",
  })
)`
  &:hover {
    background-color: rgb(220, 120, 80);
  }
`;

export const Span = styled.span({
  fontWeight: "bold",
});
