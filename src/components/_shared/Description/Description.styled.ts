import styled from "styled-components";

export const Text = styled.p`
  width: 100%;
  font-size: 16;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    white-space: normal;
  }
`;

export const Span = styled.span({
  color: "#a6eefe",
  fontWeight: "bold",
});
