import Navbar from "./Navbar";
import FeaturesContainer from "./FeaturesContainer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="heroContainer">
        <h1 className="text-xl font-bold text-red-500">
          what we provide you in this platform happy to help you
        </h1>
        <div className="containers">
          <FeaturesContainer />
          <FeaturesContainer />
          <FeaturesContainer />
          <FeaturesContainer />
        </div>
      </div>
    </>
  );
}

export default Home;
