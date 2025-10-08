import React, { use, useState } from "react";
import AppCard from "../home/appCard/AppCard";
import { CiSearch } from "react-icons/ci";

const Apps = ({ appsDataPromise }) => {
  const appData = use(appsDataPromise);
  const [apps, setApps] = useState(appData);

  const handleSearch = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length) {
      const searchedApps = apps.filter((app) =>
        app.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setApps(searchedApps);
      }
    else {
        setApps(appData)
      }
  };

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
        <p className="text-md md:text-xl lg:text-xl font-bold">({appData.length})Apps Found</p>
        <input
          onChange={handleSearch}
          type="text"
          className="border w-[12rem] lg:w-[20rem] px-10 py-1 rounded-xl relative"
          placeholder="Search"
        />
        <CiSearch className="absolute text-orange-600 font-bold right-50 lg:right-83" />
      </div>
      <div className="md:grid lg:grid grid-cols-4 gap-5 space-y-5 mb-8">
        {apps.map((singleAppData) => (
          <AppCard
            key={singleAppData.id}
            singleAppData={singleAppData}
          ></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
