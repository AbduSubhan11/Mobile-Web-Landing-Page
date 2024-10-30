import React from "react";

function MobileStock(props) {
  return (
    <div className="py-10">
    {/* MOBILE STOCK */}
    <div className="text-center space-y-12">
      {/* MOBILE TEXT BG */}
      <div className="relative inline-block">
        <svg
          width="200"
          height="104"
          viewBox="0 0 200 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 left-16 transform -translate-x-1/2 -top-5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M93.7279 0.126099C134.615 -0.167501 176.106 8.57468 190.698 28.9187C207.746 52.6862 201.719 81.6377 162.679 96.2572C124.813 110.437 74.8008 101.247 38.4137 85.9453C6.69857 72.6085 -7.39308 50.5685 5.70499 30.2471C18.2218 10.8274 55.138 0.403206 93.7279 0.126099Z"
            fill="url(#paint0_linear_1_1601)"
            fillOpacity="0.76"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1601"
              x1="100.325"
              y1="0.124509"
              x2="100.196"
              y2="103.273"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7CC140" />
              <stop offset="1" stopColor="#388FCB" />
            </linearGradient>
          </defs>
        </svg>

        <h1 className="text-5xl font-bold text-white relative">
          Mobile <span className="text-[#388FCB] font-bold">Stock</span>
        </h1>
      </div>
      <p className="text-xl font-semibold ">
        We stay up-to-date with the latest technology trends and offer innovative
        solutions that help you stay ahead in the competition.
      </p>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md: md:grid-cols-4 gap-10 px-10">
          <div className="rounded-3xl bg-gradient-to-b from-[#83e24f] to-[#34abe2]">
            <div className="flex flex-col justify-center items-center rounded-3xl  m-1 px-3 py-4 bg-[#f2fbff] border-2 card1">
              <img src="iphone2.png" alt="" className="h-32 w-fit" />
              <h1 className="text-xl font-bold">Iphone 14 Pro Max</h1>
              <p className="text-1xl text-gray-400">
                Apple iphone 14 pro 512GB (MQ233)
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-[#83e24f] to-[#34abe2]">
            <div className="flex flex-col justify-center items-center rounded-3xl  m-1 px-3 py-4 bg-[#f2fbff] border-2 card1">
              <img src="iphone2.png" alt="" className="h-32 w-fit" />
              <h1 className="text-xl font-bold">Iphone 14 Pro Max</h1>
              <p className="text-1xl text-gray-400">
                Apple iphone 14 pro 512GB (MQ233)
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-[#83e24f] to-[#34abe2]">
            <div className="flex flex-col justify-center items-center rounded-3xl  m-1 px-3 py-4 bg-[#f2fbff] border-2 card1">
              <img src="iphone2.png" alt="" className="h-32 w-fit" />
              <h1 className="text-xl font-bold">Iphone 14 Pro Max</h1>
              <p className="text-1xl text-gray-400">
                Apple iphone 14 pro 512GB (MQ233)
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-[#83e24f] to-[#34abe2]">
            <div className="flex flex-col justify-center items-center rounded-3xl  m-1 px-3 py-4 bg-[#f2fbff] border-2 card1">
              <img src="iphone2.png" alt="" className="h-32 w-fit" />
              <h1 className="text-xl font-bold">Iphone 14 Pro Max</h1>
              <p className="text-1xl text-gray-400">
                Apple iphone 14 pro 512GB (MQ233)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileStock;
