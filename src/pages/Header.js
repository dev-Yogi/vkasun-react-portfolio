import React from "react";

const headShot = require('../assets/head-shot.jpeg');

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Vanessa</code>

        <div class="flex-row flex-wrap justify-center mt-10">
          <div class="w-2/4 sm:w-2/4 px-4">
            <img src={headShot} alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
          </div>
</div>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >
      <a href="https://github.com/dev-Yogi?tab=repositories" target="blank">
        <code>Check out my Projects!</code>
      </a>
      </button>
    </div>
  );
}

export default Header;
