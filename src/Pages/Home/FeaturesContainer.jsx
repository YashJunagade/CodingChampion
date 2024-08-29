/* eslint-disable react/prop-types */
function FeaturesContainer({ featureTitle, featureDescription, pageRoute }) {
  return (
<<<<<<< HEAD
    <div className="w-[60%] sm:w-[90%] lg:w-[70%] max-w-[380px] mx-auto">
      <div className=" flex flex-col min-h-[300px] rounded-custom shadow-even-shadow  hover:shadow-accent  hover:shadow-even-shadow transition duration-300  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
        <div className=" rounded-t-custom bg-accent">
=======
    <div className="w-[80%] mx-auto mt-10">
      <div className=" rounded-custom shadow-even-shadow  hover:shadow-accent  hover:shadow-even-shadow transition duration-300  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
        <div>
>>>>>>> aee20924c30b2fb75120de81dae92ed46b0c93ec
          <img
            src=""
            alt="feature"
            className=" w-full rounded-t-custom object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="items-center text-lg font-semibold text-black">
            {featureTitle}
          </h1>
          <p className=" text-sm text-secondary">{featureDescription}</p>

          <a href={pageRoute}>
            <button
              type="button"
              className="w-full rounded-sm bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition duration-200"
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
