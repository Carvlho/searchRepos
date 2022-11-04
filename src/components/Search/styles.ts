import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
`;

export const SearchForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: solid "1px #eee";
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  background: rgb(113, 89, 193);
  border: 0px;
  padding: 0px 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const ContainerFilters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 1rem;
`;

export const ContainerOrderFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerSortFilter = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.5rem;
`;
