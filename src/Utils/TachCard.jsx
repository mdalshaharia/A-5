import { Star } from "lucide-react";


export default function TechCard({ tech, onAddToStack, updateStack }) {
  const isSelected = updateStack.includes(tech.name);

  return (
    <div className="w-full max-w-xs rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img className="h-12 w-12" src={tech.icon} alt={tech.name} />

        {tech.badge && (
          <span
            className={
              "rounded-full px-3 py-1 text-xs font-medium bg-gray-900 text-white"
            }
          >
            {tech.badge}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="mt-2 text-sm text-gray-500">{tech.description}</p>
      <div className="flex mt-5 items-center justify-between text-sm">
        <span className="rounded-lg bg-gray-100 px-3 py-1 font-medium text-gray-700">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-gray-800">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={onAddToStack}
        className={`w-full mt-4 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white  ${isSelected ? "cursor-not-allowed" : ""}`}
      >
        {isSelected ? " ✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
