import React from "react";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon */}
      <div className="w-6 h-6 bg-black rotate-45 rounded-sm flex items-center justify-center">
        <div className="w-3 h-3 bg-white rotate-45"></div>
      </div>

      {/* Text */}
      <span className="font-semibold text-lg">WizardZ</span>
    </div>
  );
}

export default Logo;
