import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/2 h-full p-4 bg-textPrimary mr-24 flex flex-col">
        <h2 className="text-textAccent text-3xl font-semibold">New</h2>
        <h3 className="text-white text-base font-semibold capitalize">
          Hydrogen vs Electric car
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
