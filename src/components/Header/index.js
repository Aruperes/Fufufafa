import Logo from "./Logo";
import Generation from "./Generation";
const Header = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Logo text="logo props" />
      <Generation text="generation props" />
    </div>
  );
};

export default Header;
