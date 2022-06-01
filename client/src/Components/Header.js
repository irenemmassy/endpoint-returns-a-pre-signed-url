import React from "react";

function Header() {
  return (
    <div className="w-full bg-main">
      <div className="container mx-auto px-6 grid grid-cols-2 items-center">
        <div>
          <img src="logo.svg" className="w-20 h-20 object-contain" />
        </div>
        <div className="flex justify-end">
          <button className="px-8 font-semibold py-2 text-white bg-subMain rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
