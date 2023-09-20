import React from "react";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <>
      <div className="px-24">
        <img src={heroImg} alt="Hero" />
        <div className="flex">
          <h1 className="font-bold text-5xl text-textPrimary capitalize">
            The bright future of Web 3.0?
          </h1>
          <div>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quo. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quo ?
            </p>
            <button className="bg-textPrimary text-white font-semibold rounded-sm px-8 py-2 uppercase">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
