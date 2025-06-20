import React from 'react';

const CallToAction = () => {
  return (
    <section className="text-center px-6 py-10 mb-15">
      <h3 className="text-3xl sm:text-3xl font-bold text-[#00252e] max-w-sm mx-auto md:max-w-xl lg:text-[45px] lg:max-w-3xl mb-5">
        Ready To Build Your Community?
      </h3>
      <button className="bg-[hsl(322,100%,66%)] text-white rounded-[2rem] px-6 py-3 text-sm font-semibold mt-5 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[25%] lg:text-xl hover:bg-pink-300 transition duration-300">
        Get Started For Free
      </button>
    </section>
  );
};

export default CallToAction;
