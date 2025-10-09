import React, { use, useEffect, useState } from "react";
import AppCard from "../home/appCard/AppCard";
import { CiSearch } from "react-icons/ci";
import Loading from "../loading/Loading";

const Apps = ({ appsDataPromise }) => {
  const appData = use(appsDataPromise);
  const [apps, setApps] = useState(appData);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (searchText.trim() === "") {
        setApps(appData);
      } else {
        const result = appData.filter((app) =>
          app.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setApps(result);
      }

      setLoading(false)
    }, 200);
  }, [searchText]);

  return (
    <div className="py-10 my-0 px-10">
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl text-orange-600 font-bold">
          Our All Applications
        </h2>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-md md:text-xl lg:text-xl font-bold">
          ({apps.length})Apps Found
        </p>
        <input
          // onChange={handleSearch}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="border w-[12rem] lg:w-[20rem] px-10 py-1 rounded-xl relative"
          placeholder="Search"
        />
        <CiSearch className="absolute text-orange-600 font-bold right-50 lg:right-83" />
      </div>
      {apps.length > 0 ? (
        loading ? (
          <Loading></Loading>
        ) : (
          <div className="md:grid lg:grid grid-cols-4 gap-5 space-y-5 mb-8">
            {apps.map((singleAppData) => (
              <AppCard
                key={singleAppData.id}
                singleAppData={singleAppData}
              ></AppCard>
            ))}
          </div>
        )
      ) : (
        <div className="w-full flex justify-center items-center">
          <div className="space-y-6 p-3">
            <img src="/imges/App-Error.png" className="w-sm mx-auto" alt="" />
            <h2 className="text-5xl font-bold">OPPS!!! NO APP FOUND</h2>
            <p className="text-gray-500">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
