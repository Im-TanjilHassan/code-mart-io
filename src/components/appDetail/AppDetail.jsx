import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import RatingChart from "./ratingChart/RatingChart";
import { setInstallApp } from "../../utility/addTDb";
import Swal from "sweetalert2";


const AppDetail = ({ appsDataPromise }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const allAppData = use(appsDataPromise);
  const singleAppData = allAppData.find(
    (appData) => appData.id === parseInt(id)
  );

  
  useEffect(() => {
    const getAppData = JSON.parse(localStorage.getItem("installedApp")) || [];
    const storedApp = getAppData.some((app) => app.id === id);
    setIsInstalled(storedApp);
  }, [id]);

  if (!singleAppData) {
    return (
      <div className="w-full flex justify-center items-center py-5">
        <div className="space-y-6 p-3 text-center">
          <img src="/imges/App-Error.png" className="w-64 mx-auto" alt="" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">OPPS!!! NO APP FOUND</h2>
          <p className="text-gray-500">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/apps"
            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-orange-800 to-orange-400 hover:bg-orange-700 text-white rounded-lg font-medium transition-all"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = singleAppData;

  const handleInstallBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, install it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Installed!",
          text: "Your App has been Installed.",
          icon: "success",
        });
        const appDataLC = {
          id: id,
          img: image,
          title: title,
          downloads: downloads,
          ratingAvg: ratingAvg,
          size: size,
        };
        setInstallApp(appDataLC);
        setIsInstalled(true);
      }
    });
  };

  return (
    <div className="mb-20 px-2 md:px-7 lg:px-10 space-y-10">
      <div className="hero bg-base-200 lg:h-[28rem] pt-10">
        <div className="hero-content flex-col lg:flex-row justify-start gap-10 w-full">
          <img
            src={image}
            className="lg:max-w-sm rounded-lg shadow-2xl lg:h-[22rem]"
          />
          <div className="w-sm lg:w-md lg:p-3 space-y-6 text-center">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">
              {title}
            </h1>
            <p className="text-sm">
              Developed by
              <strong className="text-orange-600">{companyName}</strong>
            </p>
            <hr className="text-gray-400 mb-5" />
            <div className="flex justify-between items-center text-center mb-10">
              <div className="space-y-1">
                <img
                  src="/imges/icon-downloads.png"
                  alt=""
                  className="mx-auto w-[1.5rem]"
                />
                <p className="text-sm">Download</p>
                <p className="text-2xl font-bold">{downloads / 1000000}M</p>
              </div>
              <div className="space-y-1">
                <img
                  src="/imges/icon-ratings.png"
                  alt=""
                  className="mx-auto w-[1.5rem]"
                />
                <p className="text-sm">Average Ratings</p>
                <p className="text-2xl font-bold">{ratingAvg}</p>
              </div>
              <div className="space-y-1">
                <img
                  src="/imges/icon-review.png"
                  alt=""
                  className="mx-auto w-[1.5rem]"
                />
                <p className="text-sm">Total Reviews</p>
                <p className="text-2xl font-bold">{reviews}K</p>
              </div>
            </div>
            {isInstalled ? (
              <button
                disabled
                className="btn bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold"
              >
                Installed
              </button>
            ) : (
              <button
                onClick={handleInstallBtn}
                className="btn bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold"
              >
                Install Now ({size}MB)
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
      <RatingChart ratings={ratings}></RatingChart>
      <hr className="text-gray-400" />
      <div>
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="text-gray-700 leading-relaxed text-base mt-2 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetail;
