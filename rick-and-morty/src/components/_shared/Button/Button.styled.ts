import styled from "styled-components";

export const Button = styled(
  styled.button({
    fontSize: "20px",
    flexBasis: "170px",
    flexGrow: "1",
    flexShrink: "1",

    padding: "0 20px",
    height: "50px",
    backgroundColor: "#a6eefe",
    border: "none",
    cursor: "pointer",
    transition: "all",
    transitionDuration: "0.2s",
  })
)`
  &:hover {
    background-color: #8ac9d7;
  }
`;
