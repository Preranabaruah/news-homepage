import React from "react";
import img1 from "../../assets/images/image-gaming-growth.jpg";

const Content = () => {
  return (
    <>
      <div className="w-full px-24 my-24 grid grid-cols-3">
        <div className="flex space-x-4 ">
          <img src={img1} alt="gaming" className="w-40 h-40 object-contain" />
          <div className="flex flex-col h-40 w-40 bg-blue-50">
            <h3 className="text-textSecondary font-semibold tracking-wider">
              01
            </h3>
            <p className="capitalize font-bold text-textPrimary text-xl">
              Reviving retro <span className="uppercase">pc</span>s
            </p>
            <p className="text-textSecondary">
              What happens when old PCs are given modern updates?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
