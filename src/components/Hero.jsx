import React from "react";
import MobileWatchAnimation from "./Mobile Watch Animation";

function Hero() {
  let slides = document.querySelectorAll(".slide");
  let counter = 0;

  slides.forEach((slide, index) => {
    slide.style.bottom = `${index * 100}%`;
  });

  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateY(${counter * 100}%)`;
    });
  };

  const goNext = () => {
    if (counter < slides.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    slideImage();
  };

  setInterval(() => {
    goNext();
  }, 2000);

  return (
    <div className=" py-8 overflow-hidden relative bg-[#f2fbff]">

      {/* HEROES CONTAINER */}
      <div className="md:flex justify-between items-center min-h-screen md:px-32 px-5">
        <img
          src="heroeleft1.png"
          alt="heorImg"
          className="absolute md:flex hidden left-12 top-[70px]"
        />
        {/* LEFT */}
        <div className="space-y-6 w-[596px]">
          <h1 className="font-bold md:text-5xl text-[8vw]">
            Largest <span className="text-[#388FCB]">Wholesalers</span>
          </h1>
          <div className="font-bold md:text-5xl text-[8vw] flex">
            of 
            <div className="slideContainer flex text-[#388FCB] w-[80%] h-[90px] m-auto relative overflow-hidden">
              <h1 className="slide absolute w-full h-full transition-all duration-700">
                Mobile Phones
              </h1>
              <h1 className="slide absolute w-full h-full transition-all duration-700">
                laptops
              </h1>
              <h1 className="slide absolute w-full h-full transition-all duration-700">
                Tablets
              </h1>
            </div>
          </div>
          <p className="md:text-xl text-[3vw] pr-6">
            Supply that meets Demand. Get the best wholesale prices of used and
            refurbished Mobile Stocks
          </p>
          <button className="flex items-center text-[#388FCB] text-xl">
            Learn More
            <svg
              className="h-6 w-8 text-[#388FCB]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          <div className="md:space-x-4 md:w-[800px] w-fit md:flex items-center md:space-y-0 space-y-5">
            {/* INPUT DIV */}
            <div className="flex h-10 items-center pl-2 rounded-3xl text-[#888888] border-2 border-[#83e24f]">
              <svg
                className="h-6 w-8 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent h-full w-full rounded-3xl"
              />
            </div>
            <button
              className="flex md:w-52 w-full items-center group bg-[#83e24f] text-white hover:bg-white hover:text-[#83e24f] border-2 border-[#83e24f] h-12 px-8 rounded-3xl"
            >
              Subscribe
              <svg
                className="h-6 w-8 text-white group-hover:text-[#83e24f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button
              className="flex md:w-52 w-full items-center group bg-[#388FCB] text-white hover:bg-transparent hover:text-[#34abe2] border-2 border-[#34abe2] h-12 px-8 rounded-3xl"
            >
              <svg
                className="h-6 w-8 text-white group-hover:text-[#388FCB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="5" x2="12" y2="19" />{" "}
                <line x1="18" y1="13" x2="12" y2="19" />{" "}
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg>
              Stock List
            </button>
          </div>

          <div className="md:flex md:space-y-0 space-y-5 items-center md:space-x-6">
            {/* SOCIAL LINKS ICON */}
            <div className="flex">
              {/* INSTAGRAM */}
              <div className="rounded-[50%] bg-gradient-to-r from-[#83e24f] to-[#34abe2] p-4">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              {/* FACEBOOK */}
              <div className="rounded-[50%] bg-gradient-to-r from-[#83e24f] to-[#34abe2] p-4">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              {/* LINKEDIN */}
              <div className="rounded-[50%] bg-gradient-to-r from-[#83e24f] to-[#34abe2] p-4">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                  <rect x="2" y="9" width="4" height="12" />{" "}
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              {/* TWITTER */}
              <div className="rounded-[50%] bg-gradient-to-r from-[#83e24f] to-[#34abe2] p-4">
                <svg
                  className="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* PROFILE ICON */}
              <svg
                width="50"
                height="35"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8C7.06087 8 8.07828 7.57857 8.82843 6.82843C9.57857 6.07828 10 5.06087 10 4C10 2.93913 9.57857 1.92172 8.82843 1.17157C8.07828 0.421427 7.06087 0 6 0C4.93913 0 3.92172 0.421427 3.17157 1.17157C2.42143 1.92172 2 2.93913 2 4C2 5.06087 2.42143 6.07828 3.17157 6.82843C3.92172 7.57857 4.93913 8 6 8ZM15 8C15.7956 8 16.5587 7.68393 17.1213 7.12132C17.6839 6.55871 18 5.79565 18 5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2C14.2044 2 13.4413 2.31607 12.8787 2.87868C12.3161 3.44129 12 4.20435 12 5C12 5.79565 12.3161 6.55871 12.8787 7.12132C13.4413 7.68393 14.2044 8 15 8ZM2.25 10C1.65326 10 1.08097 10.2371 0.65901 10.659C0.237053 11.081 0 11.6533 0 12.25V12.5C0 12.5 0 17 6 17C12 17 12 12.5 12 12.5V12.25C12 11.6533 11.7629 11.081 11.341 10.659C10.919 10.2371 10.3467 10 9.75 10H2.25ZM15 15.5C13.829 15.5 12.932 15.319 12.245 15.042C12.6449 14.3672 12.8958 13.6147 12.981 12.835C12.9907 12.7403 12.9971 12.6452 13 12.55V12.25C13.0013 11.4122 12.678 10.6065 12.098 10.002L12.2 10H17.8C18.3835 10 18.9431 10.2318 19.3556 10.6444C19.7682 11.0569 20 11.6165 20 12.2C20 12.2 20 15.5 15 15.5Z"
                  fill="#7CC140"
                />
              </svg>
              <h1 className="text-[16px] font-semibold text-[#34abe2] from-[#83e24f] to-[#34abe2]">
                400k people Registered
              </h1>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center">
          {/* RIGTH BG */}
          <svg
            width="600"
            height="860"
            viewBox="0 0 812 860"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rightbg absolute md:top-0 md:w-[1000px] w-[500px] h-[860px] "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M466.10 30.4467 758.036 -8.22869 857.489 88.8902C967.957 196.765 1010.75 367.267 966.97 515.331C925.639 655.103 784.526 726.44 651.407 785.801C524.895 842.216 382.257 894.273 259.019 831.024C138.226 769.03 112.117 620.9 75.4105 490.184C34.9034 345.933 -52.8417 178.739 43.6673 64.1304C139.476 -49.6463 317.428 21.6962 466.102 26.2194Z"
              fill="#7CC9E8"
              fillOpacity="0.24"
            />
          </svg>

          {/* bgMobile 1 */}
          <svg
            width="434"
            height="407"
            viewBox="0 0 434 407"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bgMobile1 absolute md:w-[500px] w-[250px] md:top-[250px] top-auto right-auto "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M202.314 0.0388094C291.411 -1.31962 381.851 32.9182 413.704 112.998C450.918 206.553 437.863 320.646 352.829 378.437C270.353 434.489 161.345 398.528 82.0104 338.423C12.8623 286.035 -17.9055 199.271 10.5816 119.144C37.8044 42.5725 118.222 1.32093 202.314 0.0388094Z"
              fill="url(#paint0_linear_655_867)"
              fillOpacity="0.75"
            />
            <defs>
              <linearGradient
                id="paint0_linear_655_867"
                x1="216.69"
                y1="0"
                x2="216.69"
                y2="406.387"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7CC140" />
                <stop offset="1" stopColor="#388FCB" />
              </linearGradient>
            </defs>
          </svg>

          {/* bgMobile 2 */}
          <svg
            width="434"
            height="407"
            viewBox="0 0 434 407"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bgMobile2 md:w-[480px] w-[250px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M202.314 0.0388094C291.411 -1.31962 381.851 32.9182 413.704 112.998C450.918 206.553 437.863 320.646 352.829 378.437C270.353 434.489 161.345 398.528 82.0104 338.423C12.8623 286.035 -17.9055 199.271 10.5816 119.144C37.8044 42.5725 118.222 1.32093 202.314 0.0388094Z"
              fill="url(#paint0_linear_655_867)"
              fillOpacity="75"
            />
            <defs>
              <linearGradient
                id="paint0_linear_655_867"
                x1="216.69"
                y1="0"
                x2="216.69"
                y2="406.387"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7CC140" />
                <stop offset="1" stopColor="#388FCB" />
              </linearGradient>
            </defs>
          </svg>

          <img
            src="iphone.png"
            alt="heorImg"
            className="md:h-[495px] h-[300px] absolute md:top-[180px] top-auto right-auto"
          />
        </div>

        {/* UPPER RIGHT SMALL */}
        <svg
          width="100"
          height="407"
          viewBox="0 0 434 407"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute md:right-32 right-0 md:top-0 top-[550px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M202.314 0.0388094C291.411 -1.31962 381.851 32.9182 413.704 112.998C450.918 206.553 437.863 320.646 352.829 378.437C270.353 434.489 161.345 398.528 82.0104 338.423C12.8623 286.035 -17.9055 199.271 10.5816 119.144C37.8044 42.5725 118.222 1.32093 202.314 0.0388094Z"
            fill="url(#paint0_linear_655_867)"
            fillOpacity="0.75"
          />
          <defs>
            <linearGradient
              id="paint0_linear_655_867"
              x1="216.69"
              y1="0"
              x2="216.69"
              y2="406.387"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7CC140" />
              <stop offset="1" stopColor="#388FCB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* TWO COLORFULL LINE */}
      <div className="space-y-2">
        {/* 1ST LINE */}
        <div className="md:w-96 w-52 h-3 rounded-r-lg bg-gradient-to-r from-[#83e24f] to-[#34abe2]"></div>
        {/* 2ND LINE */}
        <div className="md:w-[500px] w-72 h-3 rounded-r-lg bg-gradient-to-r from-[#34abe2] to-[#83e24f] "></div>
      </div>

      {/* ANIMATION */}
      <MobileWatchAnimation />
    </div>
  );
}

export default Hero;
