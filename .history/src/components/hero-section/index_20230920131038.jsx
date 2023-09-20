import React from "react";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <>
      <div className="px-24">
        <img src={heroImg} alt="Hero" />
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-6xl text-textPrimary capitalize text-left">
            The bright future of Web 3.0?
          </h1>
          <div className="w-full flex flex-col">
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quo. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quo ?
            </p>
            <button className="w-40 bg-textPrimary text-white tracking-wider rounded-sm px-8 py-2 uppercase mt-4">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
