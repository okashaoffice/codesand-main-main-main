import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
function Nav() {
  const [width, setWidth] = useState({ winWidth: window.innerWidth });
  const detectSize = () => {
    setWidth({
      winWidth: window.innerWidth,
    });
  };
  useEffect (() => {
    window.addEventListener('resize', detectSize)
    return () =>{
      window.removeEventListener('resize', detectSize)
    }
  },[width]) 
  const breakpoint = 1000;
  return (
    <div>
      <nav className=" bg-[#161616] navfont tab:bg-[#1d1d1d]">
        <div className="flex justify-between p-4 px-14 mob:px-2">
          <div className="flex items-center gap-x-8 tab:gap-x-4  ">
            <div className=" border-2 h-6 border-navtext hover:border-white cursor-pointer w-6 transition-all "></div>
            <p className="text-white lg:hidden">CodeSandbox</p>
            <ul className="text-sm tab:hidden text-navtext flex gap-x-5 ">
              <li className="cursor-pointer hover:text-white transition-all">
                Feature
              </li>
              <li className="cursor-pointer hover:text-white transition-all ">
                Use Cases
              </li>
              <li className="cursor-pointer hover:text-white transition-all ">
                Resources
              </li>
              <li className="cursor-pointer hover:text-white transition-all ">
                Docs
              </li>
              <li className="cursor-pointer hover:text-white transition-all ">
                Support
              </li>
              <li className="cursor-pointer hover:text-white transition-all ">
                Enterprise
              </li>
              <li className="cursor-pointer hover:text-white transition-all ">
                Pricing
              </li>
            </ul>
          </div>
          <div className="flex gap-x-3 items-center">
            <p className="text-navtext hover:text-white text-sm transition-all">
              Sign In
            </p>
            <button className="rounded-md hover:bg-white transition-all   bg-limebtn text-sm px-3 py-1 ">
              Try for free
            </button>
          </div>
        </div>
      </nav>
      {window.innerWidth > breakpoint ? (
        <div className="bg-lime flex justify-between p-3 px-14">
          <div className="flex items-center gap-x-2">
            <p className="bg-gray-900 text-white text-xs px-2 py-[0.10rem] rounded-xl">
              New
            </p>
            <p>
              Introducing CodeSandbox CDE{" "}
              <span className="text-sm pl-2">
                {" "}
                Instant cloud development environments
              </span>
              .
            </p>
          </div>
          <div className="flex  items-center text-lime hover:text-white transition-all  bg-black w-28 py-1 rounded-md px-2 gap-x-1">
            <button className="font-semibold text-sm   ">Learn more</button>
            <IoIosArrowForward className=" text-base mt-1  " />
          </div>
        </div>
      ) : (
        <ReasponsiveNav />
      )}
    </div>
  );
}

export default Nav;

function ReasponsiveNav() {
  return (
    <div className="overflow-x-scroll bg-black scrollhid mob:pb-5 tab:pb-5 border-b-[#252525] border-b-2  ">
      <div>
        <ul className="text-sm text-navtext flex justify-between gap-x-20 bg-black w-full pt-4 px-4  ">
          <li className="cursor-pointer hover:text-white transition-all">
            Feature
          </li>
          <li className="cursor-pointer hover:text-white transition-all  ">
            UseCases
          </li>
          <li className="cursor-pointer hover:text-white transition-all ">
            Resources
          </li>
          <li className="cursor-pointer hover:text-white transition-all ">
            Docs
          </li>
          <li className="cursor-pointer hover:text-white transition-all ">
            Support
          </li>
          <li className="cursor-pointer hover:text-white transition-all ">
            Enterprise
          </li>
          <li className="cursor-pointer hover:text-white transition-all ">
            Pricing
          </li>
        </ul>
      </div>
    </div>
  );
}
