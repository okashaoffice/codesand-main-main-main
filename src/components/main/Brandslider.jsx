import React from "react";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Adobe from "../../assets/slideimg/adobe.png"
import Intel from "../../assets/slideimg/intellogo.jpg"
import Micro from "../../assets/slideimg/microsoft.png"
import Nividia from "../../assets/slideimg/nidiia.jpg"
import Shopify from "../../assets/slideimg/shopify.jpg"
import Stripe from "../../assets/slideimg/stripe.png"
import Uber from "../../assets/slideimg/uber.jpg"

function Brandslider() {
  return (
    <div className=" overflow-hidden">
      <Splide
        options={{
          type: "loop",
          gap: "20px",
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 5,
          breakpoints: {
            600: {
              perPage: 3,
            },
          },
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
          
          
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <img
            src={Adobe}
            alt="Image 1"
            className="h-32 w-32"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Intel}
            alt="Image 2"
            className="h-32 w-44"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Micro}
            alt="Image 2"
            className="h-32 w-44"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Nividia}
            alt="Image 2"
            className="h-32 w-44"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Shopify}
            alt="Image 2"
            className="h-32 w-44"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Stripe}
            alt="Image 2"
            className="h-32 w-44"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Uber}
            alt="Image 2"
            className="h-32 w-44"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Brandslider;
