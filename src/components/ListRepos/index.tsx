import { Card } from "../Card";

import { ReposList } from "./styles";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  language: string;
}

export function ListRepos(props: any) {
  return (
    <ReposList>
      <ul>
        {props.repos[0] ? (
          props.repos.map((repo: Repository) => {
            return <Card key={repo.name} repository={repo} />;
          })
        ) : (
          <div>
            <p>Nenhum repositório encontrado.</p>
          </div>
        )}
      </ul>
    </ReposList>
  );
}
