import React, { Suspense, use } from "react";
import Banner from "./banner/Banner";
import { useLoaderData } from "react-router";
import AppCard from "./appCard/AppCard";

const Home = ({appsDataPromies}) => {
  const appData = use(appsDataPromies);
  

  return (
    <div>
      <Banner></Banner>
      {/* show dynamic app data */}
      <div className="md:grid lg:grid grid-cols-4 gap-5 space-y-5 px-10 mb-20">
        {appData.slice(0, 8).map((singleAppData) => (
          <AppCard
            key={singleAppData.id}
            singleAppData={singleAppData}
          ></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
