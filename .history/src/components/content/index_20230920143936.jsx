import React from "react";
import img1 from "../../assets/images/image-gaming-growth.jpg";

const Content = () => {
  return (
    <>
      <div className="w-full px-24 my-24 grid grid-cols-3">
        <div>
          <img src={img1} alt="gaming" className="w-40 h-40 object-contain" />
        </div>
      </div>
    </>
  );
};

export default Content;
