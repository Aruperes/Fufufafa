import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";
const Generation = () => {
  const LikaGeneration = "Lika (Generation)";
  return (
    <div>
      <h2>{LikaGeneration}</h2>
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
    </div>
  );
};

export default Generation;
