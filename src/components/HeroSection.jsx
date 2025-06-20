import React from 'react';
import ScreenImage from '../assets/images/screen-mockups.svg';

const HeroSection = () => {
  return (
    <header className="flex flex-col items-center px-6 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl pb-4 text-[#00252e] md:max-w-3xl lg:max-w-6xl">
        Build The Community Your Fans Will Love
      </h1>
      <p className="mt-5 text-lg md:text-lg lg:text-2xl text-[#00252e] max-w-3xl">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button
        type="button"
        aria-label="Get started with Huddle for free"
        className="bg-[hsl(322,100%,66%)] cursor-pointer text-white rounded-full p-4 text-sm font-bold mt-10 w-[70%] sm:w-[40%] md:w-[40%] lg:w-[30%] md:text-base lg:text-lg lg:p-6"
      >
        Get Started For Free
      </button>
      <img
        src={ScreenImage}
        alt="Mockup of the Huddle app interface on multiple screens"
        className="w-full sm:w-[400px] lg:w-[1000px] mt-32"
      />
    </header>
  );
};

export default HeroSection;
