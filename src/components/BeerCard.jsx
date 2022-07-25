import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BeerCard = () => {
  const items = useSelector((state) => state.beer.beers);

  const truncate = (str) => {
    return str.length > 140 ? str.substring(0, 137) + "..." : str;
  };

  return (
    items &&
    items.map(({ id, image_url, name, description }) => (
      <Link key={id} to={`/beer/${id}`}>
        <div className="beers__items">
          <img
            className="beers__img"
            src={image_url && image_url}
            alt="Мы не нашли изображения ("
          />
          <div className="beers__text">
            <span className="beers__title">{name}</span>
            <span className="beers__authors">{truncate(description)}</span>
          </div>
        </div>
      </Link>
    ))
  );
};

export default BeerCard;
