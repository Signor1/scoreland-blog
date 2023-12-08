import { Dna } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="w-full h-screen bg-gray-950 flex flex-col justify-center items-center z-[9999] fixed top-0 left-0">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        color="#ea580c"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
