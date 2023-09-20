import React from "react";
import img1 from "../../assets/images/image-retro-pcs.jpg";
import img2 from "../../assets/images/image-top-laptops.jpg";
import img3 from "../../assets/images/image-gaming-growth.jpg";

const Content = () => {
  return (
    <>
      <div className="w-full px-24 my-24 flex justify-between">
        <div className="flex space-x-4 ">
          <img
            src={img1}
            alt="gaming"
            className="w-40 h-[9rem] object-contain"
          />
          <div className="flex flex-col space-y-2 h-[9rem] w-60">
            <h3 className="text-textSecondary font-semibold tracking-wider">
              01
            </h3>
            <p className="capitalize font-bold text-textPrimary text-xl">
              Reviving retro <span className="uppercase">pc</span>s
            </p>
            <p className="text-textSecondary text-lg tracking-wide">
              What happens when old PCs are given modern updates?
            </p>
          </div>
        </div>
        <div className="flex space-x-4 ">
          <img
            src={img2}
            alt="gaming"
            className="w-40 h-[9rem] object-contain"
          />
          <div className="flex flex-col space-y-2 h-[9rem] w-60">
            <h3 className="text-textSecondary font-semibold tracking-wider">
              02
            </h3>
            <p className="capitalize font-bold text-textPrimary text-xl">
              Reviving retro <span className="uppercase">pc</span>s
            </p>
            <p className="text-textSecondary text-lg tracking-wide">
              What happens when old PCs are given modern updates?
            </p>
          </div>
        </div>
        <div className="flex space-x-4 ">
          <img
            src={img3}
            alt="gaming"
            className="w-40 h-[9rem] object-contain"
          />
          <div className="flex flex-col space-y-2 h-[9rem] w-60">
            <h3 className="text-textSecondary font-semibold tracking-wider">
              03
            </h3>
            <p className="capitalize font-bold text-textPrimary text-xl">
              Reviving retro <span className="uppercase">pc</span>s
            </p>
            <p className="text-textSecondary text-lg tracking-wide">
              What happens when old PCs are given modern updates?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
