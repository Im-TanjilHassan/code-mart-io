import React, { useEffect, useState } from "react";
import InstalledApp from "./installedApp/InstalledApp";
import { deleteApp } from "../../utility/addTDb";
import { FaAngleDown } from "react-icons/fa";
import Swal from "sweetalert2";



const Installation = () => {
  const [installedApp, setInstallApp] = useState([]);
  const [isSorted, setIsSorted] = useState("")

  useEffect(() => {
    const getDataFromLC =JSON.parse(localStorage.getItem("installedApp")) || [];
    setInstallApp(getDataFromLC);
  }, []);

  const handleUninstall = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setInstallApp(deleteApp(id));
      }
    });
  };

  const handleSort = (e) => {
    const sortOption = e.target.innerText;

    if (sortOption === "High-Low") {
      setIsSorted(sortOption)
      const sortedHighLow = installedApp.sort((a, b) => {
        return b.downloads - a.downloads
      })

      setInstallApp(sortedHighLow)
    }
    else if (sortOption === "Low-High") {
      setIsSorted(sortOption)
      const sortedHighLow = installedApp.sort((a, b) => {
        return a.downloads - b.downloads;
      });

      setInstallApp(sortedHighLow);
    }
    
  }

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
      <div className="flex justify-between md:px-6 lg:px-8 items-center mb-10">
        <p className="text-md md:text-xl lg:text-xl font-bold">
          ({installedApp.length})Apps Found
        </p>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1  border border-gray-500"
          >
            {isSorted ? (
              <p>Sort by: {isSorted}</p>
            ) : (
              <div className="flex items-center">
                <p>Sort by</p>
                <FaAngleDown />
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-1 w-42 p-2 shadow-xl/30 bg-white"
          >
            <li onClick={handleSort}>
              <a>High-Low</a>
            </li>
            <li onClick={handleSort}>
              <a>Low-High</a>
            </li>
          </ul>
        </div>
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
