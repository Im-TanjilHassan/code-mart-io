import React, { use, useState } from "react";
import { useParams } from "react-router";
import RatingChart from "./ratingChart/RatingChart";
import { toast } from "react-toastify";

const AppDetail = ({ appsDataPromise }) => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const allAppData = use(appsDataPromise);
  const singleAppData = allAppData.find(
    (appData) => appData.id === parseInt(id)
  );
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
        setInstalled(true);
        toast.success("App Installed Successfully")
    }

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
            {installed ? (
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
