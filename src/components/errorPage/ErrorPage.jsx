import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="w-full flex justify-center items-center pt-10">
        <div className="space-y-6 p-3 text-center">
          <img src="/imges/error-404.png" className="w-64 mx-auto" alt="" />
          <h2 className="text-5xl font-bold">OPPS!!! NO APP FOUND</h2>
          <p className="text-gray-500">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 text-white bg-gradient-to-r from-orange-800 to-orange-400 font-bold hover:bg-orange-700 rounded-lg transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;