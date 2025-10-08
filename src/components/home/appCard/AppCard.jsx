import React from "react";

const AppCard = ({ singleAppData }) => {
  const { image, downloads, ratingAvg, title } = singleAppData;

  return (
    <div className="card bg-base-100 md:w-52 lg:w-72 shadow-xl/30 p-3 border-b-3 border-orange-600 lg:hover:cursor-pointer lg:transition-transform lg:duration-300 lg:hover:-translate-y-2 lg:hover:shadow-xl">
      <figure>
        <img src={image} className="h-52 md:h-42 lg:h-52 w-full rounded-xl" alt="" />
      </figure>
      <div className="card-body space-y-5">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <img
              src="/imges/icon-downloads.png"
              alt=""
              className="w-[1rem] h-[1rem]"
            />
            <p className="text-[#00D390] font-bold">{downloads / 1000000}M</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src="/imges/icon-ratings.png"
              alt=""
              className="w-[1rem] h-[1rem]"
            />
            <p className="text-[#FF8811] font-bold text-right">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
