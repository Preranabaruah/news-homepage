import React from "react";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";
import Sidebar from "../sidebar";

const Hero = () => {
  return (
    <>
      <div className="w-full flex items-start">
        <div className="px-24 h-[34rem] bg-blue-50">
          <img src={heroImg} alt="Hero" />
          <div className="w-full flex justify-between gap-8 mt-4 items-start ">
            <h1 className="font-bold text-5xl text-textPrimary capitalize text-left">
              The bright future of Web 3.0?
            </h1>
            <div className="w-full flex flex-col">
              <p className="line-clamp-3">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quo. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quo ?
              </p>
              <button className="w-40 bg-textPrimary text-white tracking-wider rounded-sm px-8 py-2 uppercase mt-2">
                Read more
              </button>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
      <div className="h-96"></div>
    </>
  );
};

export default Hero;
