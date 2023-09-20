import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/2 h-96 p-4 bg-textPrimary mr-24 flex flex-col space-y-6">
        <div className="flex flex-col">
          <h2 className="text-textAccent text-3xl font-semibold">New</h2>
          <h3 className="text-white text-lg font-semibold capitalize hover:text-primary hover:cursor-pointer">
            Hydrogen vs Electric car
          </h3>
          <p className="text-base text-textSecondary">
            Will hydrogen fuel cars ever catch up to EVs?
          </p>
          <div className="flex-1 border border-textSecondary rounded"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-semibold capitalize hover:text-primary hover:cursor-pointer">
            Hydrogen vs Electric car
          </h3>
          <p className="text-base text-textSecondary">
            Will hydrogen fuel cars ever catch up to EVs?
          </p>
          <div className="flex-1 border border-textSecondary rounded"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-semibold capitalize hover:text-primary hover:cursor-pointer">
            Hydrogen vs Electric car
          </h3>
          <p className="text-base text-textSecondary">
            Will hydrogen fuel cars ever catch up to EVs?
          </p>
          {/* <div className="flex-1 border border-textSecondary rounded"></div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
