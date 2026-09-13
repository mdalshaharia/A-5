import React, { use, useState } from "react";

const data = fetch("/Data/data.json").then((res) => res.json());

const ExploreTech = () => {
  const techData = use(data);
  return (
    <div className="min-h-screen bg-white px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore the <span className="text-fuchsia-600">Technologies</span>
        </h1>
        <p className="mt-2 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTech;
