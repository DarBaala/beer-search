import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const FullBeer = () => {
  const [beer, setBeer] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBeer() {
      try {
        const { data } = await axios.get(
          "https://api.punkapi.com/v2/beers/" + id
        );
        setBeer(data[0]);
      } catch (error) {
        console.error("Пиво не получено(");
        alert("Пиво не найдено :(");
        navigate("/");
      }
    }
    fetchBeer();
  }, []);

  if (!beer) {
    return <h3 className="container">LOADING...</h3>;
  }

  return (
    <div className="container">
      <div className="fullbeer">
        <div className="fullbeer__wrapper">
          <img
            className="fullbeer__img"
            src={beer.image_url && beer.image_url}
            alt="Мы не нашли изображения ("
          />
          <div className="fullbeer__info">
            <p>
              Name: <br />
              {beer.name && beer.name}
            </p>
            <p>
              Tagline: <br />
              {beer.tagline && beer.tagline}
            </p>
            <p>
              Description: <br />
              {beer.description && beer.description}
            </p>
            <p>Alcohol by volume {beer.abv && beer.abv}</p>
            <p>
              Food pairing <br />
              {beer.food_pairing && beer.food_pairing.join(", ")}
            </p>
          </div>
        </div>
        <Link to="/">
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
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FullBeer;
