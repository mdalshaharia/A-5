import heroImg from "./../../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button className="rounded-full btn-gradient px-6 py-3 text-sm font-semibold text-white shadow-md ">
            Explore Technologies
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src={heroImg} alt="Hero" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default Hero;
