import Logo from "./Logo";
import Generation from "./Generation";
const Header = () => {
    const JeremyHeader= "Hello (Header)"
    return (
      <div>
        <h2>{JeremyHeader}</h2>
        <Logo/>
        <Generation/>
      </div>
    );
  };
  
export default Header;