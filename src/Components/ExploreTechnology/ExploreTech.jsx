import React, { use, useState } from "react";
import TechCard from "../../Utils/TachCard";
import SidePanel from "../sidePanel/sidePanel";
import { toast } from "react-toastify";

const data = fetch("/Data/data.json").then((res) => res.json());

const ExploreTech = () => {
  const techData = use(data);
  const [updateStack, setUpdateStack] = useState([]);

  const [stack, setStack] = useState(() => {
    const savedStack = localStorage.getItem("stack");
    return savedStack ? JSON.parse(savedStack) : [];
  });

 const addToStack = (name) => {
  if (stack.includes(name)) {
    toast.error("Already added to stack");
    return;
  }
  const updatedStack = [...stack, name];
  setStack(updatedStack);
  setUpdateStack(updatedStack);
  localStorage.setItem("stack", JSON.stringify(updatedStack));
  toast.success(`${name} added to stack`);
};

const removeFromStack = (name) => {
  if (!stack.includes(name)) {
    return;
  }

  const updatedStack = stack.filter((item) => item !== name);
  setStack(updatedStack);
  setUpdateStack(updatedStack);
  localStorage.setItem("stack", JSON.stringify(updatedStack));
  toast.success(`${name} removed from stack`);
};

  const removeAllFromStack = () => {
    setStack([]);
    setUpdateStack([]);
    localStorage.removeItem("stack");
    toast.success("All technologies removed from stack");
  };

  const filtered =
    stack.length > 0
      ? techData.filter((tech) => stack.includes(tech.name))
      : [];

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
            {techData.map((tech, idx) => (
              <TechCard
                key={idx}
                tech={tech}
                updateStack={updateStack}
                onAddToStack={() => addToStack(tech.name)}
              />
            ))}
          </div>

          <SidePanel
            stack={filtered}
            removeFromStack={removeFromStack}
            removeAllFromStack={removeAllFromStack}
          ></SidePanel>
        </div>
      </div>
    </div>
  );
};

export default ExploreTech;
