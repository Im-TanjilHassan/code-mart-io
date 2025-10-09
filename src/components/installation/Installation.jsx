import React, { useEffect, useState } from "react";
import InstalledApp from "./installedApp/InstalledApp";
import { deleteApp } from "../../utility/addTDb";

const Installation = () => {
  const [installedApp, setInstallApp] = useState([]);

  useEffect(() => {
    const getDataFromLC =JSON.parse(localStorage.getItem("installedApp")) || [];
    setInstallApp(getDataFromLC);
  }, []);

  const handleUninstall = (id) => {
    setInstallApp(deleteApp(id));
  };

  return (
    <div className="p-10">
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
          ({installedApp.length})Apps Found
        </p>
      </div>
      <div className="space-y-5">
        {installedApp.map((app) => (
          <InstalledApp
            key={app.title}
            app={app}
            handleUninstall={handleUninstall}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
