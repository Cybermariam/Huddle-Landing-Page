import React from 'react';
import Logo from '../src/assets/images/logo.svg';
import BackgroundFooterMobile from '../src/assets/images/bg-footer-top-mobile.svg';
import BackgroundFooter from '../src/assets/images/bg-footer-top-desktop.svg';
import PhoneIcon from '../src/assets/images/icon-phone.svg';
import EmailIcon from '../src/assets/images/icon-email.svg';
import { IoLogoFacebook } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <img
        src={BackgroundFooterMobile}
        alt="Background Color"
        className="w-full  block md:hidden"
      />
      <img
        src={BackgroundFooter}
        alt="Background Color"
        className="w-full hidden md:block md:block"
      />
      <div className="flex flex-col lg:flex-row justify-between bg-[#00252e] text-white p-10 lg:p-20 gap-30 lg:gap-[200px]">
        <div className="mx-auto lg:order-2 ">
          <h4 className="font-bold  text-xl">NEWSLETTER</h4>
          <p className="text-lg py-[15px] max-w-sm">
            To receive tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>
          <form className="flex flex-col lg:flex-row gap-4 pt-2 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white p-5 rounded-xl w-full lg:flex-1"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[hsl(322,100%,66%)] text-white text-lg font-bold px-6 py-4 w-[50%] sm:w-auto rounded-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col mx-auto pl-7 lg:order-1 ">
          <img
            src={Logo}
            className="w-[200px] lg:w-[300px] brightness-0 invert"
          />
          <p className="py-[20px] pb-[50px] text-lg max-w-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            suscipit aliquam nihil rem quos sapiente aut tenetur!
          </p>
          <div className="flex gap-6 items-center pb-5">
            <img src={PhoneIcon} alt="Phone Icon" className="w-[25px]" />
            <p className="text-lg">Phone: +2348166980495</p>
          </div>
          <div className="flex gap-6 items-center">
            <img className="w-[25px]" src={EmailIcon} alt="Email Icon" />
            <p className="text-lg">ademolamariam95@gmail.com</p>
          </div>
          <div className="flex py-10 gap-4 ">
            <IoLogoFacebook className="text-3xl" />
            <FaInstagram className="text-3xl" />
            <FaTwitterSquare className="text-3xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
