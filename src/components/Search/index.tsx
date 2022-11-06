import { GoSearch } from "react-icons/go";
import { Select } from "../Select";

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

const optionsOrder = [
  {
    id: 1,
    label: "Ordem Ascendente",
    value: "asc",
  },
  {
    id: 2,
    label: "Ordem Descrecente",
    value: "desc",
  },
];

const optionsSort = [
  {
    id: 1,
    label: "Estrelas",
    value: "stars",
  },
  {
    id: 2,
    label: "Atualizações",
    value: "updated",
  },
  {
    id: 3,
    label: "Forks",
    value: "forks",
  },
];

const optionsType = [
  {
    id: 1,
    label: "Todos",
    value: "all",
  },
  {
    id: 2,
    label: "Dono",
    value: "owner",
  },
  {
    id: 3,
    label: "Membro",
    value: "member",
  },
];

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
          <Select options={optionsOrder} order={order} />
        </ContainerOrderFilter>
        <ContainerSortFilter>
          <Select options={optionsSort} sort={sort} />
        </ContainerSortFilter>
        <ContainerSortFilter>
          <Select options={optionsType} type={type} />
        </ContainerSortFilter>
      </ContainerFilters>
    </SearchContainer>
  );
}
