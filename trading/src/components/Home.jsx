import React from 'react';

function Home() {
  return (
    <div className="w-100% m-auto">
      <div className="flex flex-col md:flex-row gap-5 justify-between align-center bg-[#212224] px-20 md:px-20 md:py-20">
        <div className="flex flex-col justify-center w-[100%] md:w-[50%] py-5">
          <h1 className="text-5xl md:text-7xl text-white font-semibold py-3">
            Multi-regulated global broker.
          </h1>
          <p className="text-gray-400 text-md md:text-2xl md:pr-5 my-5">
            A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA
          </p>
          <button className="animate-bounce text-white border-2 md:w-[40%] py-3 mt-5 font-semibold border-[#fc5b3f] rounded-md">
            DISCOVER ACCOUNTS
          </button>
        </div>
        <div className="md:w-[50%] flex justify-center px-5">
          <img
            className="w-[100%]"
            src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png"
            alt="HERO IMAGE"
          />
        </div>
      </div>
      {/* Add more sections here following the same pattern */}
    </div>
  );
}

export default Home;
