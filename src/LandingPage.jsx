// import React from 'react';
// import ScreenImage from '../src/assets/images/screen-mockups.svg';
// import IconCommunities from '../src/assets/images/icon-communities.svg';
// import IconMessages from '../src/assets/images/icon-messages.svg';
// import GrowTogether from '../src/assets/images/illustration-grow-together.svg';

// import BackgroundTop from '../src/assets/images/bg-section-top-desktop-1.svg';
// import BackgroundTop2 from '../src/assets/images/bg-section-top-desktop-2.svg';

// import BackgroundBottom from '../src/assets/images/bg-section-bottom-desktop-1.svg';
// import FlowingConversation from '../src/assets/images/illustration-flowing-conversation.svg';

// import BackgroundBottom2 from '../src/assets/images/bg-section-bottom-desktop-2.svg';

// import Users from '../src/assets/images/illustration-your-users.svg';

// const LandingPage = () => {
//   return (
//     <main className="pt-[100px] m-auto">
//       <section className="flex justify-center flex-col items-center">
//         <h1 className="text-3xl bold  font-bold pb-4 text-[#00252e]">
//           Build The Community Your Fans Will Love
//         </h1>
//         <p className="text-center">
//           Huddle re-imagines the way we build communities. You have a <br />
//           voice, but so does your audience. Create connections with your <br />
//           users as you engage in genuine discussion.
//         </p>
//         <button className="bg-[#ff52bfd9] border-none cursor-pointer text-white rounded-4xl p-3 text-[10px] font-semibold mt-5 w-[25%]">
//           Get Started For Free
//         </button>
//         <img
//           src={ScreenImage}
//           alt="Screen Mockup"
//           className="w-[500px] mt-[50px] "
//         />
//         <div className="flex justify-between w-lg">
//           <div className="">
//             <img
//               src={IconCommunities}
//               alt="Icon Communities"
//               className="w-[25px]"
//             />

//             <h3 className="font-bold text-4xl text-[#00252e]">1.4k+</h3>
//             <p className="text-xs text-gray-600">Communities Formed</p>
//           </div>
//           {/* second */}
//           <div className="">
//             <img src={IconMessages} alt="Icon Messages" className="w-[25px]" />
//             <h3 className="font-bold text-4xl text-[#00252e]">2.7m+</h3>
//             <p className="text-xs text-gray-600">Messages Sent</p>
//           </div>
//         </div>
//       </section>
//       <section className="">
//         <img src={BackgroundTop} className="w-full" alt="" />
//         <div className="flex items-center justify-between p-7  bg-[#f5faff] flex-col md:flex-row ">
//           <div>
//             <h3 className="text-xl font-extrabold pb-1">Grow Together</h3>
//             <p className="text-sm ml:text-base lg:text-lg text-[#00252e]">
//               Generate meaningful discussions with your audience and build a
//               <br /> strong loyal community. Think of insightful conversations
//               you <br />
//               miss out on with a feedback form.
//             </p>
//           </div>
//           <div className="w-[200px] order-1 md:order-2">
//             <img
//               src={GrowTogether}
//               className="w-full h-auto"
//               alt="Grow Together"
//             />
//           </div>
//         </div>
//         <img className="w-full" src={BackgroundBottom} alt="Background Color" />
//       </section>
//       {/* section2 */}
//       <section>
//         <div className="flex items-center justify-between p-7">
//           <div className="w-[200px]">
//             <img src={FlowingConversation} alt="Background Color" />
//           </div>
//           <div>
//             <h3 className="text-xl font-extrabold pb-1">
//               Flowing Conversations
//             </h3>
//             <p className="text-[8px] text-[#00252e]">
//               You wouldn't paginate a conversation in real life, so why do it
//               online?
//               <br /> Our threads have just-in-time loading for a more natural
//               flow
//               <br />
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* section 3 */}
//       <section className=" mt-[40px] m-auto ">
//         <img src={BackgroundTop2} className="w-full" alt="Background Color" />
//         <div className="flex items-center bg-[#f5faff] justify-between p-7">
//           <div>
//             <h3 className="text-xl font-extrabold pb-1">Your Users</h3>
//             <p className="text-[8px] text-[#00252e]">
//               It takes no time at all to integrate Huddle with your app's
//               <br /> authentication solution.This means, once signed in to your
//               app, your <br />
//               users can start immediately
//             </p>
//           </div>
//           <div className="w-[200px]">
//             <img src={Users} alt="" />
//           </div>
//         </div>
//         <img
//           src={BackgroundBottom2}
//           alt="Background Color"
//           className="w-full"
//         />
//       </section>

//       <section className="text-center p-10">
//         <h3 className="text-3xl bold  font-bold pb-4 text-[#00252e]">
//           Ready To Build Your Community?
//         </h3>
//         <button className="bg-[hsl(322,100%,66%)] border-none text-white rounded-4xl p-3 text-[10px] font-semibold mt-5 w-[30%] cursor-pointer">
//           Get Started For Free
//         </button>
//       </section>
//     </main>
//   );
// };

// export default LandingPage;

import React from 'react';
import HeroSection from '../src/components/HeroSection';
import StatsSection from '../src/components/StatsSection';
import FeatureSection from '../src/components/FeatureSection';
import CallToAction from '../src/components/CallToAction';

const LandingPage = () => {
  return (
    <main className="pt-[100px] m-auto">
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
};

export default LandingPage;
