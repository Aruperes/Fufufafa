import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = ({text}) => {
  const JeremyHome = "Hello (Home)";
  return (
    <div>
      <h2>{text}</h2>
      <Search />
      <CardInfo />
    </div>
  );
};

export default Home;