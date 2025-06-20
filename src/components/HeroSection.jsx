import React from 'react';
import ScreenImage from '../assets/images/screen-mockups.svg';
const HeroSection = () => {
  return (
    <section className="flex justify-center flex-col items-center px-6">
      <h1 className="text-4xl pb-4 text-[#00252e] text-center md:text-4xl lg:text-5xl max-w-6xl">
        Build The Community <br className="block md:hidden lg:hidden" /> Your
        Fans Will Love
      </h1>
      <p className=" mt-5 text-center text-lg md:text-lg lg:text-2xl text-[#00252e]">
        Huddle re-imagines the way we build{' '}
        <br className="block md:hidden lg:hidden" />
        communities. You have a <br className="hidden md:block lg:block" />
        voice, but so does <br className="block md:hidden lg:hidden" /> your
        audience. Create connections with your
        <br />
        users as you engage in genuine discussion.
      </p>
      <button className="bg-[hsl(322,100%,66%)] border-none cursor-pointer text-white rounded-4xl p-4 text-sm font-bold mt-15 w-[70%] sm:w-[40%] md:w-[40%] lg:w-[30%] md:text-base lg:text-lg  lg:p-6">
        Get Started For Free
      </button>
      <img
        src={ScreenImage}
        alt="Screen Mockup"
        className="w-full lg:w-[1000px] mt-32 sm:w-[400px]"
      />
    </section>
  );
};

export default HeroSection;
