import { GoRepoForked, GoStar, GoRepo, GoLinkExternal } from "react-icons/go";

import {
  Container,
  ContainerDescription,
  ContainerHeaderCard,
  ContainerSubtitleCard,
  DescriptionText,
  ForkText,
  LanguageText,
  LinkIcon,
  LinkText,
  StarsText,
  TitleCard,
} from "./styles";

interface CardItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    forks: number;
    stargazers_count: number;
    updated_at: string;
    language: string;
  };
}

export function Card(props: CardItemProps) {
  return (
    <Container>
      <ContainerHeaderCard>
        <TitleCard>
          <GoRepo /> {props.repository?.name}
        </TitleCard>
        <ForkText>
          {props.repository?.forks}
          <GoRepoForked />
        </ForkText>
      </ContainerHeaderCard>
      <ContainerSubtitleCard>
        <LanguageText>
          {props.repository?.language ?? "Sem linguagem."}
        </LanguageText>
        <StarsText>
          {props.repository?.stargazers_count}
          <GoStar />
        </StarsText>
      </ContainerSubtitleCard>
      <ContainerDescription>
        <DescriptionText>
          {props?.repository.description ?? "Sem descrição."}
        </DescriptionText>
        <LinkText href={props.repository.html_url} target="_blank">
          Abrir repositório
          <LinkIcon>
            <GoLinkExternal />
          </LinkIcon>
        </LinkText>
      </ContainerDescription>
    </Container>
  );
}
