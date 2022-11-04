import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 1.25rem;
  margin: 0 0 1rem;

  background-color: #fafafa;

  border-radius: 4px;
  border: 1px solid rgba(113, 89, 193, 0.5);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

export const ContainerHeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const TitleCard = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ForkText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 400;
`;

export const ContainerSubtitleCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.8rem;
`;

export const LanguageText = styled.p``;

export const StarsText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.8rem;
`;

export const DescriptionText = styled.p``;

export const LinkText = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #000;

  &:hover {
    color: #7159c1;
  }
`;

export const LinkIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.2rem;
`;
