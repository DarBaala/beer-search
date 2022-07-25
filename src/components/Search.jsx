import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { setSearch, setPage, fetchBeers } from "../redux/slices/beerSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.beer.searchField);
  const page = useSelector((state) => state.beer.page);

  const getBeers = async (event) => {
    event.preventDefault();
    if (searchField.length > 0) {
      dispatch(fetchBeers({ searchField, page }));
    } else {
      alert("Заполните поле ввода!");
    }
  };

  const handleSearch = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div className="search">
      <form onSubmit={getBeers} action="" className="search__form">
        <input onChange={handleSearch} className="search__input" type="text" />
        <Button
          sx={{
            color: "white",
            backgroundColor: "transparent",

            "&:hover": {
              backgroundColor: "transparent",
              color: "white",
            },
          }}
          variant="contained"
          className="search__button"
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
