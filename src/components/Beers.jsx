import { useEffect } from "react";

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es/exports";
import BeersSkeleton from "./BeerSkeleton";
import BeerCard from "./BeerCard";
import { setPage } from "../redux/slices/beerSlice";
import { fetchBeers, fetchFirstUpdate } from "../redux/slices/beerSlice";

const Beers = () => {
  const status = useSelector((state) => state.beer.status);
  const beers = useSelector((state) => state.beer.beers);
  const page = useSelector((state) => state.beer.page);
  const searchField = useSelector((state) => state.beer.searchField);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFirstUpdate({ page }));
  }, []);

  useEffect(() => {
    if (searchField.length > 0) {
      dispatch(fetchBeers({ searchField, page }));
    }
  }, [page]);

  const changePageNext = () => {
    dispatch(setPage(page + 1));
    window.scrollTo(0, 0);
  };

  const changePagePrev = () => {
    dispatch(setPage(page - 1));
    window.scrollTo(0, 0);
  };

  const skeletons = [...new Array(8)].map((_, index) => (
    <BeersSkeleton key={index} />
  ));

  return (
    <div className="beers">
      <div className="container">
        <div className="beers__wrapper">
          {status === "loading" ? skeletons : <BeerCard />}
        </div>

        {page > 1 ? (
          <Button
            sx={{
              color: "white",
              backgroundColor: "transparent",
              width: "130px",
              margin: "30px 20px 30px 0",

              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
              },
            }}
            variant="contained"
            type="submit"
            onClick={changePagePrev}
          >
            PREVIOUS
          </Button>
        ) : (
          ""
        )}

        {beers.length >= 24 ? (
          <Button
            sx={{
              color: "white",
              backgroundColor: "transparent",
              width: "130px",
              margin: "30px 0",

              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
              },
            }}
            variant="contained"
            type="submit"
            onClick={changePageNext}
          >
            NEXT
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Beers;
