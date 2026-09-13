import { X } from "lucide-react";
import { useState } from "react";


const SideCard = ({tech, removeFromStack}) => {
    
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        {tech.icon && (
          <img className="flex h-9 w-9 items-center justify-center" src={tech.icon} alt={tech.name} />
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
          <p className="text-xs text-gray-400">{tech.category}</p>
        </div>
      </div>

      <button
        onClick={() => removeFromStack(tech.name)}
        aria-label={`Remove ${tech.name} from stack`}
        className="text-gray-400"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SideCard;
