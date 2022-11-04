import { useEffect, useState } from "react";
import GlobalStyle from "./global/global";
import api from "./services/api";

import { GoMarkGithub } from "react-icons/go";

import { ListRepos } from "./components/ListRepos";
import { Search } from "./components/Search";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [repositories, setRepositories] = useState([]);

  const [search, setSearch] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  useEffect(() => {
    if (search === "") {
      setIsLoading(true);
      api
        .get(
          "/users/carvlho/repos?" +
            "&direction=" +
            orderValue +
            "&sort=" +
            sortValue +
            "&type=" +
            typeValue
        )
        .then((response) => {
          setRepositories(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [search, sortValue, orderValue, typeValue]);

  const searchRepos = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = repositories.filter((repos: any) => {
        return repos.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setRepositories(results);
    } else {
      setRepositories(repositories);
    }

    setSearch(keyword);
  };

  const handleSort = (value: string) => {
    setSortValue(value);
  };

  const handleOrder = (value: string) => {
    setOrderValue(value);
  };

  const handleType = (value: string) => {
    setTypeValue(value);
  };

  return (
    <div className="container">
      <h2 className="icon">
        <GoMarkGithub />
      </h2>
      <GlobalStyle />
      <Search
        search={searchRepos}
        value={search}
        sort={handleSort}
        order={handleOrder}
        type={handleType}
      />
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <ListRepos repos={repositories} />
      )}
    </div>
  );
}

export default App;
