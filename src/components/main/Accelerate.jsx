import { MdRebaseEdit } from "react-icons/md";
import { LuTimer } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import React from "react";
import { useState } from "react";
import { IoMdLink } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import { motion, useScroll } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";
const Source = [
  {
    source:
      "https://codesandbox.io/_next/static/videos/branchpr-4fefdeb02b80aac373a5556cf60028c3.mp4",
  },
  {
    source:
      "https://codesandbox.io/_next/static/videos/inspector-01ccbd02ee94241773e1ee29b528da7c.mp4",
  },
];
function Accelerate() {
  const [isHover, setIsHover] = useState(false);
  const handlehover = () => {
    setIsHover((setstate) => !setstate);
  };
  const { scrollY } = useViewportScroll();

  return (
    <div className="pt-12 navfont">
      <div className="flex justify-center">
        <MdRebaseEdit className="text-white text-7xl" />
      </div>
      <div>
        <h1 className="text-8xl font-semibold text-center pt-6 mob:text-4xl text-white ">
          Accelerate <br /> your git workflow.
        </h1>
        <p className="mob:px-2 text-navtext text-2xl pt-6 text-center">
          Shorten the review cycle with an all-in-one platform{" "}
          <br className="mob:hidden" />
          for efficient code reviews
        </p>
      </div>
      <div>
        <motion.div>
          <div className="flex mob:flex-col tab:flex-col justify-between pr-12 mob:pr-0 pt-12  ">
            <div className="sticky mob:relative tab:relative top-0 h-[440px] left-5  mob:left-0 ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {isHover ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <div>
                      <video
                        className="  h-96 "
                        style={{
                          maxWidth: "100%",
                          height: "440px",
                          objectFit: "cover",
                        }}
                        controls
                        muted
                        autoPlay
                      >
                        {Source.map((data, index) => {
                          return <source src={data.source} index={index + 1} />;
                        })}
                      </video>
                    </div>
                  </motion.div>
                ) : (
                  <video
                    className="  h-96 "
                    style={{
                      maxWidth: "100%",

                      height: "440px",
                      objectFit: "cover",
                    }}
                    controls
                    muted
                    autoPlay
                  >
                    <source
                      src="https://codesandbox.io/_next/static/videos/inspector-01ccbd02ee94241773e1ee29b528da7c.mp4"
                      type="video/mp4"
                    />
                  </video>
                )}
              </motion.div>
            </div>

            <div className="w-1/3 mob:w-full mob:pt-10  px-6 mob:px-2 pr-8 mob:h-full  noScrollbar   ">
              <div className="pt-1">
                <div
                  className="  opacity-[0.3] border-t-navtext   cursor-pointer hover:opacity-100 
              border-t-2 w-full hover:w-1 mob:w-0 borderanimation transition-all   hover:border-t-lime hover:borderanimation"
                >
                  <div className=" w-96 relative mob:w-[20rem]">
                    <div className="pt-4">
                      <IoMdLink className="text-lime text-4xl" />
                    </div>
                    <h1 className="text-white font-semibold pt-6 text-2xl">
                      Every PR and branch is a URL
                    </h1>
                    <p className="text-navtext pt-2 font-medium text-lg text-justify pr-10">
                      Get a cloud dev environment for every PR that starts in 2
                      seconds and integrates all code review tooling into a
                      single platform.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" pt-14"
                onMouseEnter={handlehover}
                onMouseLeave={handlehover}
              >
                <div
                  className="  opacity-[0.3] border-t-navtext   cursor-pointer hover:opacity-100 
              border-t-2 w-full mob:w-0 hover:w-1 borderanimation transition-all   hover:border-t-lime hover:borderanimation"
                >
                  <div className=" relative w-96 mob:w-[20rem] ">
                    <div className="pt-4">
                      <LuTimer className="text-lime text-4xl" />
                    </div>
                    <h1 className="text-white font-semibold pt-6 text-2xl">
                      Review code in record time
                    </h1>
                    <p className="text-navtext pt-2 font-medium text-justify pr-10 text-lg">
                      Save hours every week reviewing PRs. See the code, tests
                      and a preview, make any necessary changes, and merge it.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" pt-12"
                onMouseEnter={handlehover}
                onMouseLeave={handlehover}
              >
                <div
                  className=" mob:w-0 opacity-[0.3] border-t-navtext   cursor-pointer hover:opacity-100 
              border-t-2 w-full hover:w-1 borderanimation transition-all   hover:border-t-lime hover:borderanimation"
                >
                  <div className=" relative w-96 mob:w-[20rem] ">
                    <div className="pt-4">
                      <AiOutlineTeam className="text-lime text-4xl" />
                    </div>
                    <h1 className="text-white font-semibold pt-6 text-2xl">
                      Empower the whole team
                    </h1>
                    <p className="text-navtext pt-2 text-justify pr-10 font-medium text-lg">
                      Using accessible tooling such as our inspect tool, anyone
                      can make commit changes with a few clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Accelerate;
