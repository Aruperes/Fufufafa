import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Search text="search props" />
      <CardInfo text="cardinfo props" />
    </div>
  );
};

export default Home;