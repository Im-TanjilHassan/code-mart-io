import React from "react";

const InstalledApp = ({ app, handleUninstall }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-xl">
      <div className="flex gap-5">
        <img src={app.img} className="w-[5rem] h-[5rem] rounded-xl" alt="" />
        <div className="space-y-6">
          <h2 className="font-bold text-lg">{app.title}</h2>
          <div className="flex justify-between items-center gap-5">
            <div className="flex justify-center items-center gap-2">
              <img
                src="/imges/icon-downloads.png"
                className="w-[1rem] h-[1rem]"
                alt=""
              />
              <p>{app.downloads / 1000000}M</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/imges/icon-ratings.png"
                className="w-[1rem] h-[1rem]"
                alt=""
              />
              <p>{app.ratingAvg}5</p>
            </div>
            <p>{app.size}MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(app.id)}
        className="btn bg-gradient-to-r from-orange-800 to-orange-400 text-white font-bold"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApp;
