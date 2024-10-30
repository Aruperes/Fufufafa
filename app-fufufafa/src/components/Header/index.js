import Logo from "./Logo";
import Generation from "./Generation";
const Header = ({ text }) => {
  const JeremyHeader = "Hello (Header)";
  return (
    <div>
      <h2>{text}</h2>
      <Logo />
      <Generation />
    </div>
  );
};

export default Header;
