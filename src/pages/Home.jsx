import Header from "../components/Header";
import Search from "../components/Search";
import Beers from "../components/Beers";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Beers />
    </div>
  );
};

export default Home;
