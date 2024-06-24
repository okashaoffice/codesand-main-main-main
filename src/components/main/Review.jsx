import React from "react";

import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Revone from "../../assets/rev1.jpg";
import Rev2 from "../../assets/rev2.jpg";
import Rev3 from "../../assets/rev3.jpg";
import Rev4 from "../../assets/rev4.jpg";
import Rev5 from "../../assets/rev5.jpg";
import Rev6 from "../../assets/rev6.jpg";
const Reviewdata = [
  {
    text: "The most interesting part of Codesandbox is just how perfectly it makes coding in the cloud just work.",
    img: Rev2 ,
    name: "Leo",
    title: "Engineering Manager, Adverity",
  },
  {
    text: "We don't need a powerful machine for every developer or even give them a long list of setup steps before they can be productive.",
    img: Revone ,
    name: "wana",
    title: "Software Engineer, React Team",
  },
  {
    text: "It feels much more like my local environment.",
    img: Rev3 ,
    name: "wana",
    title: "Designer Developer, Stripe",
  },
];
const Reviewdata2 = [
  {
    text: "The new CodeSandbox is the first online editor I can see myself using to build a full project.",
    img: Rev4 ,
    name: "Matthew Phillips",
    title: "Co-creator of Astro",
  },
  {
    text: "It's such a huge productivity boost.",
    img:  Rev5 ,
    name: "Dominik",
    title: "Frontend Tech Lead at Adverity",
  },
  {
    text: "It's a great experience and I miss some of its features when developing in VS Code.",
    img: Rev6 ,
    name: "Edwin Web",
    title: "Senior Software Enginee",
  },
];

function Review() {
  return (
    <div>
      <div>
        <div>
          <Splide
            options={{
              type: "loop",
              drag: false,
              arrows: false,
              pagination: false,
              gap: "20px",
              perPage: 1,
              padding: { left: 10, right: 20 },
              fixedWidth: "27rem",
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: 0.5,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {Reviewdata.map((data) => {
              return (
                <SplideSlide>
                  <div className="bg-lime p-6 py-8  rounded-lg h-full">
                    <h1 className="text-black font-semibold text-xl h-32">
                      {data.text}
                    </h1>
                    <div className="flex gap-x-5  align-baseline items-center pt-12">
                      <img
                        src={data.img}
                        alt=""
                        className="h-10 rounded-full w-10"
                      />
                      <div>
                        <p>{data.name}</p>
                        <p className="text-navtext text-sm">{data.title}</p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className="pt-5">
          <Splide
            options={{
              type: "loop",
              drag: false,
              arrows: false,
              pagination: false,
              gap: "20px",
              perPage: 2,
              padding: { left: 10, right: 20 },
              fixedWidth: "27rem",
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: 0.7,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {Reviewdata2.map((data) => {
              return (
                <SplideSlide>
                  <div className="bg-lime p-6 py-8  rounded-lg h-full">
                    <h1 className="text-black font-semibold text-xl h-32">
                      {data.text}
                    </h1>
                    <div className="flex gap-x-5  align-baseline items-center pt-12">
                      <img
                        src={data.img}
                        alt=""
                        className="h-10 rounded-full w-10"
                      />
                      <div>
                        <p>{data.name}</p>
                        <p className="text-navtext text-sm">{data.title}</p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Review;
