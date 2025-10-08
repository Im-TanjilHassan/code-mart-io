import React, { Suspense, use } from "react";
import Banner from "./banner/Banner";
import AppCard from "./appCard/AppCard";
import { Link } from "react-router";

const Home = ({ appsDataPromise }) => {
  const appData = use(appsDataPromise);

  return (
    <div className=" mb-20">
      <Banner></Banner>
      {/* show dynamic app data */}
      <h2 className="text-3xl text-center font-bold text-orange-600 mb-5">
        Trending Apps
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="md:grid lg:grid grid-cols-4 gap-5 space-y-5 px-10 mb-8">
        {appData.slice(0, 8).map((singleAppData) => (
          <AppCard
            key={singleAppData.id}
            singleAppData={singleAppData}
          ></AppCard>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link to="/apps" className="btn bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold text-[1rem]">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
