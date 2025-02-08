import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
      {/* Left Section */}
      <div className="w-full md:w-[500px] mt-3 md:mt-8 md:ml-10 pl-2">
        <h1 className="text-2xl md:text-5xl font-extrabold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm mt-3">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black px-8 py-2 mt-4 rounded-[16px] text-sm text-white">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative">
        <Image
          src="/profileimage.jpeg"
          className="w-[500px] mr-4"
          width={200}
          height={200}
          alt="profile"
        />

        {/* Star 1 */}
        <Image
          src="/vector.png"
          className="w-[50px] md:w-[100px] absolute top-[100px] left-10 md:top-[300px] md:left-[-100px]"
          width={200}
          height={200}
          alt="star 1"
        />

        {/* Star 2 */}
        <Image
          src="/vector.png"
          className="w-[60px] md:w-[100px] absolute top-10 right-[50px] md:top-[50px] md:right-[30px]"
          width={200}
          height={200}
          alt="star 2"
        />
      </div>
    </main>
  );
};

export default Hero;
