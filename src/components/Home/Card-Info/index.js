import Evo from "./Evolution";
import TypeEff from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = () => {
  const MilyCardInfo = "Emily (CardInfo)";
  return (
    <div>
      <h2>{MilyCardInfo}</h2>
      <Evo text="EvoProps" />
      <TypeEff text= "TypeEffProps"/>
      <Logo text="LogoProps"/>
    </div>
  );
};

export default CardInfo;
