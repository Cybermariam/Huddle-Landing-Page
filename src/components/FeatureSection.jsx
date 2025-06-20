import React from 'react';
import GrowTogether from '../assets/images/illustration-grow-together.svg';
import BackgroundTopMobile from '../assets/images/bg-section-top-mobile-1.svg';
import BackgroundTop from '../assets/images/bg-section-top-desktop-1.svg';
import BackgroundBottom from '../assets/images/bg-section-bottom-desktop-1.svg';
import BackgroundBottomMobile from '../assets/images/bg-section-bottom-mobile-1.svg';

import FlowingConversation from '../assets/images/illustration-flowing-conversation.svg';

import BackgroundTop2 from '../assets/images/bg-section-top-desktop-2.svg';
import BackgroundTopMobile2 from '../assets/images/bg-section-top-mobile-2.svg';
import BackgroundBottom2 from '../assets/images/bg-section-bottom-desktop-2.svg';
import BackgroundBottomMobile2 from '../assets/images/bg-section-bottom-mobile-2.svg';

import Users from '../assets/images/illustration-your-users.svg';

const FeatureSection = () => {
  return (
    <div>
      <section>
        <img
          src={BackgroundTopMobile}
          alt="Top Wave"
          className="w-full md:hidden"
        />
        <img
          src={BackgroundTop}
          alt="Top Wave"
          className="w-full hidden md:block"
        />

        <div className="bg-[#f5faff] py-20 px-6 md:px-[50px] flex flex-col md:flex-row-reverse items-center gap-10 md:gap-75">
          {/* Image */}
          <div className="w-full max-w-[400px] md:w-1/2">
            <img src={GrowTogether} alt="Grow Together" className="w-full" />
          </div>
          {/* Text */}
          <div className="mt-7 w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#00252e] mb-4">
              Grow Together
            </h3>
            <p className="text-lg md:text-xl text-[#00252e] leading-relaxed max-w-sm md:max-w-xl mx-auto md:mx-0">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <img
          src={BackgroundBottomMobile}
          alt="Bottom Wave"
          className="w-full md:hidden"
        />
        <img
          src={BackgroundBottom}
          alt="Bottom Wave"
          className="w-full hidden md:block"
        />
      </section>

      {/*  Section 2: Flowing Conversations */}
      <section className="py-20 px-6 md:px-[100px] flex flex-col md:flex-row items-center md:items-center gap-10  md:gap-100">
        {/* Image */}
        <div className="w-full max-w-[400px] md:w-1/2">
          <img
            src={FlowingConversation}
            alt="Flowing Conversations"
            className="w-full"
          />
        </div>
        {/* Text */}
        <div className="mt-7 w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#00252e] mb-4">
            Flowing Conversations
          </h3>
          <p className="text-lg md:text-xl text-[#00252e] leading-relaxed max-w-sm md:max-w-xl mx-auto md:mx-0">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </section>

      {/* Section 3: Your Users  */}
      <section>
        <img
          src={BackgroundTopMobile2}
          alt="Top Wave"
          className="w-full md:hidden"
        />
        <img
          src={BackgroundTop2}
          alt="Top Wave"
          className="w-full hidden md:block"
        />

        <div className="bg-[#f5faff] py-10 px-6 md:px-[100px] flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src={Users} alt="Your Users" className="w-full" />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#00252e] mb-4">
              Your Users
            </h3>
            <p className="text-lg md:text-xl text-[#00252e] leading-relaxed max-w-sm md:max-w-xl mx-auto md:mx-0">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. Once signed in to your app, your users
              can start chatting immediately.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <img
          src={BackgroundBottomMobile2}
          alt="Bottom Wave"
          className="w-full md:hidden"
        />
        <img
          src={BackgroundBottom2}
          alt="Bottom Wave"
          className="w-full hidden md:block"
        />
      </section>
    </div>
  );
};

export default FeatureSection;
