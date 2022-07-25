import React from "react";
import ContentLoader from "react-content-loader";

const BeersSkeleton = () => (
  <ContentLoader
    speed={2}
    width={230}
    height={320}
    viewBox="0 0 230 320"
    backgroundColor="#4a4a4a"
    foregroundColor="#ffffff"
  >
    <rect x="50" y="20" rx="0" ry="0" width="130" height="165" />
    <rect x="30" y="210" rx="0" ry="0" width="120" height="20" />
    <rect x="30" y="250" rx="0" ry="0" width="160" height="20" />
    <rect x="30" y="290" rx="0" ry="0" width="120" height="20" />
  </ContentLoader>
);

export default BeersSkeleton;
