import React from "react";
import ContentLoader from "react-content-loader";

const BeersSkeleton = () => (
  <ContentLoader
    speed={2}
    width={330}
    height={420}
    viewBox="0 0 230 320"
    backgroundColor="#4a4a4a"
    foregroundColor="#ffffff"
  >
    <rect x="5" y="23" rx="0" ry="0" width="61" height="153" />
    <rect x="87" y="7" rx="0" ry="0" width="134" height="42" />
    <rect x="87" y="67" rx="0" ry="0" width="137" height="124" />
  </ContentLoader>
);

export default BeersSkeleton;
