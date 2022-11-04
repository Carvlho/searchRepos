import { GoSearch } from "react-icons/go";

import {
  ContainerFilters,
  ContainerOrderFilter,
  ContainerSortFilter,
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchInput,
} from "./styles";

interface ISearch {
  value: string;
  search: (e: any) => void;
  order: (value: any) => void;
  sort: (value: any) => void;
  type: (value: any) => void;
}

export function Search({ value, search, order, sort, type }: ISearch) {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput
          placeholder="Procure o repositório"
          type="text"
          value={value}
          onChange={search}
          autoCorrect="false"
        />
        <SearchButton>
          <GoSearch color="#fff" />
        </SearchButton>
      </SearchForm>
      <ContainerFilters>
        <ContainerOrderFilter>
          <label className="label" htmlFor="orderInput">
            Ordem:
          </label>
          <select name="orderInput" onChange={(e) => order(e.target.value)}>
            <option value="asc">Ordem Ascendente</option>
            <option value="desc">Ordem Descrecente</option>
          </select>
        </ContainerOrderFilter>
        <ContainerSortFilter>
          <label className="label" htmlFor="sortInput">
            Ordernar por:
          </label>
          <select name="sortInput" onChange={(e) => sort(e.target.value)}>
            <option value="stars">Estrelas</option>
            <option value="updated">Atualizações</option>
            <option value="forks">Forks</option>
          </select>
        </ContainerSortFilter>
        <ContainerSortFilter>
          <label className="label" htmlFor="typeInput">
            Ordernar por tipo:
          </label>
          <select name="sortInput" onChange={(e) => type(e.target.value)}>
            <option value="all">Todos</option>
            <option value="owner">Dono</option>
            <option value="member">Membro</option>
          </select>
        </ContainerSortFilter>
      </ContainerFilters>
    </SearchContainer>
  );
}
