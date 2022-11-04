import styled from "styled-components";

export const ReposList = styled.section`
  padding: 2rem 0;
  text-align: start;

  & > ul {
    list-style: none;
    text-align: start;

    & > li {
      padding-block: 2rem;
      border: 1px solid #ccc;
      border-radius: 0.7rem;
      text-align: start;
    }
  }
`;
