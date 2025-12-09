// import React from "react";
// import Rating from "./Rating";

// const Hero = () => {
//   return (
//     <section className="max-padd-container">
//       <div className="lg:bg-[url('src/assets/bg.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full rounded-2xl relative">
//         <div className="mx-auto max-w-[1440px] px-4 flex flex-col">
//           <div className="max-w-[788px] pt-44 lg:pt-58">
//             <h3>Fresh Bites for Every Mood</h3>
//             <h2 className="uppercase mb-0 tracking-[0.22rem]">
//               <span className="text-solidOne">Get More</span>
//               <span className="text-solidOne">for Less - 25% off!</span>
//             </h2>
//             <h1>on Rice & Curries</h1>
//             <div className="flex items-center">
//               <h3>Starting from</h3>
//               <span className="bg-white p-1 inline-block rotate-[-2deg] ml-2.5 text-5xl font-extrabold">
//                 <span className="text-2xl relative bottom-3">$</span>04.
//                 <span className="text-2xl">99</span>
//               </span>
//             </div>
//             <button className="bg-solid  p-5 w-52 text-lg font-bold mt-8">
//               Shop Now
//             </button>
//           </div>
//           {/* bottom */}
//           <div className="pb-9">
//             <Rating />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import Rating from "./Rating";

import { assets } from "../../assets/data";

const Hero = () => {
  return (
    <section className=" lg:mt-40 mt-14">
      <div className="min-h-screen w-full rounded-2xl relative bg-cover bg-center bg-no-repeat">
        {/* GRID SECTION */}
        <div className="grid lg:grid-cols-12 gap-6 items-center min-h-screen">
          {/* LEFT SIDE (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-28 lg:pt-0">
            <h3>Fresh Bites for Every Mood</h3>

            <h2 className="uppercase mb-0 tracking-[0.22rem]">
              <span className="text-solidOne">Get More</span>{" "}
              <span className="text-solidOne">for Less - 25% off!</span>
            </h2>

            <h1>on Rice & Curries</h1>

            <div className="flex items-center mt-4">
              <h3>Starting from</h3>
              <span className="bg-white p-1 inline-block rotate-[-2deg] ml-2.5 text-5xl font-extrabold">
                <span className="text-2xl relative bottom-3">$</span>04.
                <span className="text-2xl">99</span>
              </span>
            </div>

            <button className="bg-solid p-5 w-52 text-lg font-bold mt-8">
              Shop Now
            </button>

            <div className="mt-8 pb-9">
              <Rating />
            </div>
          </div>

          {/* RIGHT SIDE (5 Columns) → IMAGE */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <img
              src={assets.features1}
              alt="Food Banner"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
