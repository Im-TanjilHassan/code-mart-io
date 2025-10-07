import React from "react";
import Banner from "./banner/Banner";
import { useLoaderData } from "react-router";
import AppCard from "./appCard/AppCard";

const Home = () => {

    const appData = useLoaderData()
    
  return (
    <div>
          <Banner></Banner>
          {/* show dynamic app data */}
          <div className="grid grid-cols-4 gap-3 border px-10">
              {
                  appData.slice(0, 8).map(singleAppData => (
                      <AppCard key={singleAppData.id} singleAppData={singleAppData}></AppCard>
                  ))
              }
          </div>
    </div>
  );
};

export default Home;
