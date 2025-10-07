import React from "react";

const AppCard = ({ singleAppData }) => {
  const { image, downloads, ratingAvg, title } = singleAppData;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold">{title}</h2>
        <div>
          <p className="text-[#00D390]">{downloads / 1000000}M</p>
          <p className="text-orange-600">{ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
