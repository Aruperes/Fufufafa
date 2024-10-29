import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = () => {
  const JeremyHome = "Hello (Home)";
  return (
    <div>
      <h2>{JeremyHome}</h2>
      <Search />
      <CardInfo />
    </div>
  );
};

export default Home;
