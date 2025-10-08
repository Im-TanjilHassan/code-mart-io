import React from "react";

const Banner = () => {
  return (
    <div className="hero flex flex-col bg-base-200 pt-10 mb-20">
      <div className="hero-content text-center mb-5">
        <div className="max-w-md space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            We Build <span className="text-orange-600">Productive</span> Apps
          </h1>
          <p className=" text-gray-500 text-">
            At CodeMart.io, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting.Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="space-x-4">
            <a
              href="https://play.google.com/store/games?hl=en"
              className="btn bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold"
            >
              <img className="w-5" src="/imges/googlePlay.svg" alt="" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className="btn bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold"
            >
              <img className="w-5" src="/imges/appStore.svg" alt="" />
              App Store
            </a>
          </div>
        </div>
      </div>
      <figure className="px-3 lg:px-0 md:px-0">
        <img src="/imges/hero.png" className="w-[27.625rem]" alt="" />
      </figure>
      <div className="bg-gradient-to-r from-orange-800 to-orange-400 w-full py-8 space-y-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-white">
          Trusted by Millions, Built for You
        </h2>
        <div className="px-0.5 flex justify-between items-center md:w-2/3 lg:w-2/3 mx-auto text-center">
          <div className="space-y-3">
            <p className="text-gray-300 text-xs md:text-md lg:text-md">
              Total Downloads
            </p>
            <strong className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
              29.6M
            </strong>
            <p className="text-gray-300  text-xs md:text-md lg:text-md">
              21% more than last month
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300 text-xs md:text-md lg:text-md">
              Total Reviews
            </p>
            <strong className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
              906K
            </strong>
            <p className="text-gray-300  text-xs md:text-md lg:text-md">
              46% more than last month
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300 text-xs md:text-md lg:text-md">
              Active Apps
            </p>
            <strong className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
              132+
            </strong>
            <p className="text-gray-300  text-xs md:text-md lg:text-md">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
