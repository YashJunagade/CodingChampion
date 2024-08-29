import Navbar from './Navbar';
import FeaturesContainer from './FeaturesContainer';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <div className="mb-20">
        <h1 className="text-xl font-bold text-red-500 text-center my-10">
          <span className="text-3xl block">Gear Up for Success:</span>
          <span className="text-2xl">Your Ultimate Preparation Hub!</span>
        </h1>
        <div className="flex flex-col gap-10  sm:grid sm:grid-cols-2 sm:px-6 md:px-10 lg:px-24">
          <FeaturesContainer
            featureTitle="Practical Slips"
            featureDescription="FY, SY and TY BBA(C.A.) practical slips with solutions"
            pageRoute="/slip"
          />
          <FeaturesContainer
            featureTitle="Lab Book"
            featureDescription="FY, SY and TY BBA(C.A.) Lab book Assignments with solutions"
            pageRoute="/slip"
          />
          <FeaturesContainer
            featureTitle="Data Structures & Algorithms"
            featureDescription="Practice your DSA skills with 1000+ selected questions"
            pageRoute="/dsa"
          />
          <FeaturesContainer
            featureTitle="Roadmap"
            featureDescription="Roadmap with Recommended courses and Youtube links"
            pageRoute="/roadmaps"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
