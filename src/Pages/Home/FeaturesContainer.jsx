/* eslint-disable react/prop-types */
function FeaturesContainer({ featureTitle, featureDescription, pageRoute }) {
  return (
    <div className="w-[60%] sm:w-[80%] lg:w-[70%] max-w-[380px] mx-auto">
      <div className=" flex flex-col min-h-[300px] rounded-custom shadow-even-shadow  hover:shadow-accent  hover:shadow-even-shadow transition duration-300  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
        <div className=" rounded-t-custom bg-accent">
          <img
            src=""
            alt="feature"
            className=" w-full h-40 rounded-t-custom object-cover "
          />
        </div>
        <div className="p-2">
          <h1 className="items-center text-lg font-semibold text-black sm:h-10 md:h-5">
            {featureTitle}
          </h1>
          <p className=" text-sm text-secondary  h-16 mb-2 md:h-10">
            {featureDescription}
          </p>

          <a href={pageRoute} className="mt-auto">
            <button
              type="button"
              className="w-full mb-2 rounded-md  bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition duration-200"
            >
              Try it &rarr;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturesContainer;
