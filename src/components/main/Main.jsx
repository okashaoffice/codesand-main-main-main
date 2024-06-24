import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Nav from "../navbar/Nav";
import Brandslider from "./Brandslider";
import { IoCloudOutline } from "react-icons/io5";
import { BsCodeSquare } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
import { GoLock } from "react-icons/go";
import { MdDevices } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import Review from "./Review";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Accelerate from "./Accelerate";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
function Main() {
  const [counterOn, setCounterOn] = useState(false);
  const { scrollY } = useViewportScroll();

  const scale = useTransform(scrollY, [100, 500], [1, 0.5]);
  const opacity = useTransform(scrollY, [100, 500], [1, 0]);
  const counterScale = useTransform(scrollY, [800, 0], [1, 0.5]);
  const counterOpacity = useTransform(scrollY, [800, 0], [1, 0]);

  return (
    <div>
      <Nav />

      <motion.div
        className="bg-[#161616] text  p-12 mob:p-3"
        style={{ scale, opacity }}
        initial={{ opacity: 0, left: "0%" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 0, y: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1.1 }}
          >
            <div className="">
              <h1 className="text-lime  font text-9xl mob:font-bold mob:text-4xl tab:text-7xl ">
                Instant cloud
              </h1>
              <h1 className="text-9xl mob:font-bold mob:text-4xl text-[#f5ffcb] tab:text-7xl font">
                development
              </h1>
            </div>
          </motion.div>
          <div className="absolute top-0">
            <motion.div
              initial={{ opacity: 0, x: 0, y: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.1 }}
            >
              <h1 className="text-transparent  textanimation font-bold mob:font-bold font text-9xl tab:text-7xl mob:text-4xl ">
                Instant cloud
              </h1>
              <h1 className="text-9xl tab:text-7xl mob:text-4xl text-transparent   textwhite font-bold mob:font-bold font">
                development
              </h1>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 0, y: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn", delay: 0.8 }}
        >
          <p className="text-white text-2xl  pt-12">
            CodeSandbox gives you 24/7 collaborative cloud <br /> development
            environments (CDEs) that resume in 2 seconds.
          </p>
          <div className="flex gap-x-6 pt-12 pb-1">
            <button className="bg-limebtn rounded-lg px-5 py-2  text-black hover:bg-white transition-all">
              Start for free
            </button>
            <div className="text-navtext flex items-center gap-x-2 hover:cursor-pointer transition-all hover:text-white ">
              <p className=" text-lg hover:underline transition-all ">
                Schedule a demo
              </p>
              <IoIosArrowForward className="pt-[0.30rem] text-lg" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Slider section start */}
      <div className="bg-white">
        <Brandslider />
      </div>
      {/* Slider section end */}

      {/* Counter section start */}

      <motion.div
        style={{ scale: counterScale, opacity: counterOpacity }}
        onViewportEnter={{ opacity: 0, left: "-100%" }}
        onViewportLeave={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-[#e3ff73] navfont pb-10"
      >
        <div className=" flex justify-center pt-12">
          <IoCloudOutline className="text-8xl font-normal" />
        </div>
        <p className="text-[#1d1d1d]  pt-4 font-semibold text-8xl mob:text-4xl text-center ">
          Meet a CDE that <br />
          makes an impact
        </p>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex tab:flex-col justify-between px-20 pt-12 gap-x-14 mob:px-4">
            <div className="border-t-4 border-t-[#1d1d1d] w-full">
              <h1 className="text-[#1d1d1d] font-semibold text-9xl">
                {counterOn && <CountUp start={0} end={50} duration={1} />}+
              </h1>
              <p className=" font-medium text-[#1d1d1d] text-2xl ">
                hours saved
              </p>
              <p className="text-[#4f5633]">per developer, per week</p>
            </div>
            <div className="border-t-4 border-t-[#1d1d1d] w-full">
              <h1 className="text-[#1d1d1d] font-semibold text-9xl">
                {counterOn && <CountUp start={0} end={90} duration={1} />}%
              </h1>
              <p className=" font-medium text-[#1d1d1d] text-2xl ">reduction</p>
              <p className="text-[#4f5633]">in dev onboarding time</p>
            </div>
            <div className="border-t-4 border-t-[#1d1d1d] w-full">
              <h1 className="text-[#1d1d1d] font-semibold text-9xl">
                {counterOn && <CountUp start={0} end={60} duration={1} />}%
              </h1>
              <p className="text-[#4f5633]">
                of cloud workloads will be built and <br /> deployed using CDEs
                by 2026,
                <br />{" "}
                <span className="underline hover:no-underline cursor-pointer">
                  according to Gartner
                </span>
              </p>
            </div>
          </div>
        </ScrollTrigger>

        <div className="text-[#e3ff73] hover:text-][#1d1d1d] flex pt-12 justify-center ">
          <button className="flex items-center hover:text-black  bg-[#1d1d1d] gap-x-2 py-3 px-6 rounded-md hover:bg-white transition-all ">
            Learn more about CDEs <IoIosArrowForward />
          </button>
        </div>
      </motion.div>
      {/* Counter section end */}

      {/* Envoirment section */}
      <div className="navfont bg-[black] pt-10 overflow-hidden">
        <motion.div
          initial={{
            position: "relative",
            left: "-100%",
          }}
          whileInView={{
            left: "0%",
            cursor: "pointer",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 20,
            },
          }}
          whileTap={{ scale: 0.5 }}
          className="flex justify-center pt-6  text-white"
        >
          <BsCodeSquare className="text-6xl" />
        </motion.div>
        <motion.p
          initial={{
            position: "relative",
            left: "-100%",
          }}
          whileInView={{
            left: "0%",
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
          className="text-8xl text-center font-semibold text-white mob:text-3xl pt-8"
        >
          One environment for <br />
          the whole team.
        </motion.p>
        <motion.p
          initial={{
            position: "relative",
            right: "-100%",
          }}
          whileInView={{
            right: "0%",
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
          className="text-3xl mob:text-xl text-navtext text-center pt-12 mob:px-3 mob:pt-3"
        >
          Get always consistent development environments{" "}
          <br className="mob:hidden" /> that boost productivity and empower
          collaboration.
        </motion.p>
        <div>
          <motion.div
            initial={{
              position: "relative",
              top: 300,
            }}
            whileInView={{
              top: 10,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 30,
              },
            }}
            className="flex pt-12 px-12 gap-x-12 mob:flex-col mob:px-6 tab:flex-col tab:space-y-10 "
          >
            <motion.div>
              <div className="flex justify-center">
                <IoCloudOutline className="text-[#7a60fd] text-2xl bg-[#191727] h-20 w-20 rounded-full p-3" />
              </div>
              <p className="text-white font-semibold pt-8 text-center text-xl">
                Faster than local
              </p>
              <p className="text-navtext text-lg text-center pt-2  ">
                Get rid of slow build times and time lost in context-switching.
                Our powerful VMs run your code up to 200x faster than local and
                resume any project in 2 seconds.
              </p>
            </motion.div>
            <div>
              <div className="flex justify-center">
                <IoMdCheckmark className="text-[#7a60fd] text-2xl bg-[#191727] h-20 w-20 rounded-full p-3" />
              </div>
              <p className="text-white font-semibold pt-8 text-center text-xl">
                Works on <br />
                everyone’s machine
              </p>
              <p className="text-navtext text-lg text-center pt-2  ">
                nstead of putting each developer's machine in the cloud, we run
                each branch on a centralized CDE that gives everyone the same
                experience.
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <AiOutlineTeam className="text-[#7a60fd] text-2xl bg-[#191727] h-20 w-20 rounded-full p-3" />
              </div>
              <p className="text-white font-semibold pt-8 text-center text-xl">
                Collaborative 24/7
              </p>
              <p className="text-navtext text-lg text-center pt-2  ">
                CodeSandbox is the only fully collaborative CDE. Your entire
                team can connect to the same environment and code live,
                together, anytime
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <GoLock className="text-[#7a60fd] text-2xl bg-[#191727] h-20 w-20 rounded-full p-3" />
              </div>
              <p className="text-white font-semibold pt-8 text-center text-xl">
                Reliable and secure
              </p>
              <p className="text-navtext text-lg text-center pt-2  ">
                We keep your code always private and secure. You get flexible
                permissions, access control, security monitoring, private npm,
                and more.
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center pt-20">
            <p className="text-lime flex items-center hover:underline cursor-pointer text-lg gap-x-2  hover:text-white">
              Start for free
              <IoIosArrowForward className="pt-1 text-xl" />
            </p>
          </div>
        </div>
      </div>
      {/* Envoirment section end*/}

      {/* Accelerate satrt  */}
      <Accelerate />
      {/* Accelerate end */}

      {/* Plug and play  */}
      <div className="navfont bg-black pt-32 p-12 mob:px-4">
        <div>
          <p className="text-white text-3xl font-semibold">Plug and Play</p>
          <h1 className="text-white font-bold text-8xl mob:text-3xl pt-10">
            Integrate seamlessly <br className="mob:hidden" /> with your dev
            setup.
          </h1>
          <p className="text-2xl pt-10 mob:text-xl text-navtext">
            Get all the benefits of cloud development working{" "}
            <br className="mob:hidden" /> flawlessly alongside your current
            setup.
          </p>
        </div>
        <motion.div
          initial={{
            position: "relative",
            left: "-100%",
          }}
          whileInView={{
            left: "0%",
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
          className="flex  mob:flex-col tab:flex-col pt-10 gap-x-16 "
        >
          <div className="w-full border-t-4 border-t-lime">
            <div className="pt-4">
              <MdDevices className="text-lime text-4xl" />
            </div>
            <h1 className="text-white font-semibold pt-6 text-xl">
              Use the editor of your choice
            </h1>
            <p className="text-navtext pt-2 text-justify">
              Switch between VS Code and our web editor to keep coding and
              collaborating without skipping a beat.
            </p>
            <p className="text-lime flex items-center hover:underline cursor-pointer text-lg gap-x-2 pt-2 hover:text-white">
              VS Code Extension
              <IoIosArrowForward className="pt-1 text-xl" />
            </p>
          </div>
          <div className="w-full border-t-4 border-t-lime ">
            <div className="pt-4">
              <FaGithub className="text-lime text-4xl" />
            </div>
            <h1 className="text-white font-semibold pt-6 text-xl">
              GitHub integration
            </h1>
            <p className="text-navtext pt-2 text-justify">
              Review PRs in record time and get automatic deployment previews.
            </p>
            <p className="text-lime flex items-center hover:underline cursor-pointer text-lg gap-x-2 pt-2 hover:text-white">
              Install our GitHub App
              <IoIosArrowForward className="pt-1 text-xl" />
            </p>
          </div>
          <div className="w-full border-t-4 border-t-lime">
            <div className="pt-4">
              <FiBox className="text-lime text-4xl" />
            </div>
            <h1 className="text-white font-semibold pt-6 text-xl">
              Pre-configured environments
            </h1>
            <p className="text-navtext pt-2 text-justify">
              We use Dev Containers to pre-configure your environments with all
              the required tools, libraries and dependencies, so you can skip
              the setup and start coding.
            </p>
            <p className="text-lime flex items-center hover:underline cursor-pointer text-lg gap-x-2 pt-2 hover:text-white">
              Learn more
              <IoIosArrowForward className="pt-1 text-xl" />
            </p>
          </div>
        </motion.div>
      </div>
      {/* Plug and play  end */}

      {/* Review start */}
      <Review />
      {/* Review end */}

      {/* user counter start */}
      <div className="navfont pt-16">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex mob:flex-col tab:flex-col px-12 gap-x-12">
            <div className="border-t-[#252525] border-t-4 w-full">
              <h1 className="text-white text-5xl font-bold pt-10">
                {counterOn && <CountUp start={0} end={4} duration={1} />}{" "}
                million+
              </h1>
              <p className="text-white text-2xl">users</p>
            </div>
            <div className="border-t-[#252525] border-t-4 w-full">
              <h1 className="text-white text-5xl font-bold pt-10">
                {counterOn && <CountUp start={0} end={10000} duration={1} />}+
              </h1>
              <p className="text-white text-2xl">repositories connected</p>
            </div>
            <div className="border-t-[#252525] border-t-4 w-full">
              <h1 className="text-white text-5xl font-bold pt-10">
                {counterOn && <CountUp start={0} end={20000} duration={1} />}+
              </h1>
              <p className="text-white text-2xl">organizations</p>
            </div>
            <div className="border-t-[#252525] border-t-4 w-full">
              <h1 className="text-white text-5xl font-bold pt-10">
                {counterOn && <CountUp start={0} end={1} duration={3} />}{" "}
                billion+
              </h1>
              <p className="text-white text-2xl">lines of code written</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      {/* user counter end */}

      {/* future section start */}
      <ScrollTrigger>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.1,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
          className="pt-28"
        >
          <h1 className="text-white text-8xl mob:text-4xl font-bold text-center">
            Join the future <br />
            of building
          </h1>
          <div className="grid justify-center pt-10">
            <button className="bg-limebtn rounded-lg px-5 py-2 hover:bg-white transition-all">
              Start for free
            </button>
            <p className="text-lime flex items-center hover:underline cursor-pointer text-lg gap-x-2 pt-2 hover:text-white">
              Request demo
              <IoIosArrowForward className="pt-1 text-xl" />
            </p>
          </div>
          <div>
            <img
              src="https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.4a712740.png&w=3840&q=75"
              alt=""
            />
          </div>
        </motion.div>
      </ScrollTrigger>

      {/* future section end */}

      {/* footer start  */}

      <div className="bg-[#161616]">
        <div>
          <div className=" flex px-20 mob:px-5  gap-x-96 bg-[#161616] py-16 flex-wrap border-t-2 border-t-[#222222]">
            <div className=" border-2 h-6 border-navtext hover:border-white cursor-pointer w-6 transition-all "></div>
            <div className="flex justify-between gap-x-20 flex-wrap mob:pt-10 mob:space-y-6 ">
              <div>
                <h1 className="text-[#a39f96] text-sm font-bold">Use Cases</h1>
                <ul className="space-y-2 pt-4">
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Cloud Dev Environments
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Code Reviews
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Code in Sandboxes
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Learn & Experiment
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Coding Exercises
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Instant Feedback
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[#a39f96] text-sm font-bold">Ecosystem</h1>
                <ul className="space-y-2 pt-4">
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Features
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    VS Code Extension
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Sandpack
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Status
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Enterprise
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Pricing
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[#a39f96] text-sm font-bold">Explore</h1>
                <ul className="space-y-2 pt-4">
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Discover
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Changelog
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Documentation
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-normal">
                    Blog
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-[#a39f96] text-sm font-bold">Company</h1>
                <ul className="space-y-2 pt-4">
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-medium">
                    About
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-medium">
                    Support
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-medium">
                    Careers
                  </li>
                  <li className="text-navtext text-sm hover:underline cursor-pointer font-medium">
                    Brand kit
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-t-[#222222] pb-12 px-24">
            <div className="flex mob:flex-col flex-wrap justify-between pt-10">
              <p className="text-xs text-navtext ">
                Copyright © 2024 CodeSandbox B.V. All rights reserved.
              </p>
              <div className="flex gap-x-3 ">
                <FaGithub className="text-navtext transition-all text-lg  hover:text-white cursor-pointer" />
                <FaTwitter className="text-navtext transition-all text-lg  hover:text-white cursor-pointer" />
                <CgCommunity className="text-navtext transition-all text-lg  hover:text-white cursor-pointer" />
                <FaYoutube className="text-navtext transition-all text-lg  hover:text-white cursor-pointer" />
              </div>
            </div>
            <div className="pt-1">
              <p className="text-navtext text-xs">
                Term of Use <span className="text-[#2e2e2e] mx-2">|</span>{" "}
                Privacy & Cookie Policy{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer end  */}
    </div>
  );
}

export default Main;
