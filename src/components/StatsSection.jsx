import React from 'react';
import IconCommunities from '../assets/images/icon-communities.svg';
import IconMessages from '../assets/images/icon-messages.svg';

const StatsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-[100px] mt-[150px] px-6 md:flex-row lg:flex-row md:justify-between lg:justify-between max-w-[1000px] lg:items-center md:items-center mx-auto">
      <div className="text-center flex flex-col ">
        <img
          src={IconCommunities}
          alt="Communities Icon"
          className="w-[25px] mb-4 "
        />
        <h3 className="font-bold text-6xl text-[#00252e] lg:text-8xl mb-2">
          1.4k+
        </h3>
        <p className="text-lg text-gray-600">Communities Formed</p>
      </div>
      <div className="text-center flex flex-col ">
        <img src={IconMessages} alt="Messages Icon" className="w-[25px] mb-4" />
        <h3 className="font-bold text-6xl text-[#00252e] mb-2 lg:text-8xl">
          2.7m+
        </h3>
        <p className="text-lg text-gray-600">
          Messages <br className="block md:hidden lg:hidden" />
          Sent
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
