import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";
const Generation = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Gen1 text="RevandoGen1 - using props" />
      <Gen2 text="RevandoGen2 - using props" />
      <Gen3 text="RevandoGen3 - using props" />
      <Gen4 text="RevandoGen4 - using props" />
    </div>
  );
};

export default Generation;
