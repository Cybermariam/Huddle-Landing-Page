import React from 'react';
import Logo from '../src/assets/images/logo.svg';
const Header = () => {
  return (
    <div>
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-16 md:py-6">
        <img
          src={Logo}
          className="w-[150px] md:w-[180px] lg:w-[250px]"
          alt="Huddle Logo"
        />
        <button className="border border-[#ff8fd8] rounded-full px-6 py-2 text-[#ff8fd8] text-sm md:px-8 lg:px-9 md:text-base lg:text-lg hover:bg-[#ff8fd8] hover:text-white transition duration-200 cursor-pointer">
          Try it Free
        </button>
      </nav>
    </div>
  );
};

export default Header;
