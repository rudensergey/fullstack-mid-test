import styled from "styled-components";

export const Wrapper = styled.div({
  padding: "40px",
  boxSizing: "border-box",
});

export const Title = styled.p`
  margin-bottom: 30px;
  color: white;
  font-size: 30px;
  transition: all;
  transition-duration: 0.2s;

  @media (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

export const CharacterCore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 150px 0 40px;

  @media (max-width: 600px) {
    padding: 50px 0 0;
    flex-direction: column;
  }
`;

export const Image = styled.img({
  height: "200px",
  width: "200px",
  borderRadius: "50%",
});

export const CharacterCoreWrapper = styled.div`
  height: 120px;
  width: 100%;
  margin-left: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 600px) {
    margin-left: 0px;
    text-align: center;
  }
`;

export const Name = styled.p`
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
