import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen p-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-[250px] w-full max-w-4xl mx-auto">
          <img
            src="https://www.regionalonehealth.org/wp-content/uploads/2020/11/Appendix-6.jpg"
            className="w-[800px]  h-auto rounded-xl"
            alt="Patient and doctor"
          />
          <div className="flex flex-col items-center gap-5  p-4">
            <h1 className="text-[45px] w-[450px] text-[#3C3633] text-center font-bold">
              Welcome to Patient and Insurance Management!
            </h1>
            <button
              type="button"
              class="text-white text-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              New User? Register Here!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

//https://www.colorhunt.co/palette/eeedebe0ccbe7472643c3633
