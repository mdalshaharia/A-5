import React from "react";
import SideCard from "../../Utils/SideCard";

const SidePanel = ({ stack, removeFromStack, removeAllFromStack }) => {

  return (
    <aside className="w-full max-w-65 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-gray-900">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="mt-1 text-sm text-gray-500">
            No technologies selected yet.
          </p>
          <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-gray-200">
            <span className="text-sm text-gray-400">Your stack is empty</span>
          </div>
        </>
      ) : (
        <div>
          <p className="mt-1 text-sm text-gray-500">
            {stack.length} Technology Selected.
          </p>
          <ul className="mt-4 space-y-2">
            {stack.map((tech, idx) => (
              <SideCard
                key={idx}
                tech={tech}
                removeFromStack={removeFromStack}
              ></SideCard>
            ))}
          </ul>
          <button
            onClick={removeAllFromStack}
            className="btn-outline text-orange-600 border border-orange-600 w-full rounded my-4 py-1 font-semibold text-sm"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default SidePanel;
