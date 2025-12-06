import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
    </div>
  );
};

export default Home;
// "use client";
// import React, { useState, useRef, Fragment } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Dialog, Transition } from "@headlessui/react";
// import { motion } from "framer-motion";

// import { HeroPattern, TitleLines } from "../../../../public/icons/icons";
// import Slider from "react-slick";
// import "../../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

// import hero from "../../../../public/images/hero-img-3.png";
// // import heroImgTwo from "../../../../public/images/hero-img-2.png";
// import heroImgTwo from "../../../../public/images/sec.jpg";

// // const slider = [hero, heroImgTwo];
// // import aiImg from "../../../../public/images/ai-img.png";

// const Hero = () => {
//   const [value, setValue] = useState("");
//   const [modalOpen, setModalOpen] = useState(false);
//   const videoRef = useRef(null);

//   const settings = {
//     dots: false,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     arrows: false,
//   };

//   // Animation variants
//   const textVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.25, duration: 0.8, ease: "easeOut" },
//     }),
//   };

//   const imageVariant = {
//     hidden: { opacity: 0, x: 100, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     // <section className="relative bg-gradient-to-b from-gray-100 to-gray-50 md:pt-12 md:pb-12 pb-14 pt-4 overflow-hidden">
//     <section className="relative bg-gradient-to-r from-blue-300 via-blue-200 to-blue-50 md:pt-12 md:pb-12 pb-14 pt-4 overflow-hidden">
//       <div className="md:container mx-auto px-5">
//         <Slider {...settings}>
//           {[hero, heroImgTwo].map((img, idx) => (
//             <div key={idx}>
//               <div className="flex lg:flex-row flex-col items-center justify-between gap-6 xl:gap-[5.75rem]">
//                 {/* Text Section */}
//                 <div className="lg:w-6/12 w-full">
//                   <motion.div
//                     className="flex items-center gap-3 sm:gap-6 mb-4"
//                     initial="hidden"
//                     animate="visible"
//                     custom={1}
//                     variants={textVariant}
//                   >
//                     <div className="w-14 h-px bg-yellow-400 rounded-full"></div>
//                     <span className="md:text-lg text-sm font-semibold tracking-wide text-gray-800">
//                       AI Eyes, Safe Skies Fueled By Blockchain
//                     </span>
//                   </motion.div>

//                   <motion.h1
//                     className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-extrabold leading-tight relative text-gray-900 mb-4"
//                     initial="hidden"
//                     animate="visible"
//                     custom={2}
//                     variants={textVariant}
//                   >
//                     AI Security will be Faster than Human Capabilities
//                     <TitleLines
//                       width={573}
//                       height={19}
//                       stroke="#F9A328"
//                       className="absolute top-42 left-0 hidden lg:block xl:w-[36rem] w-[27rem]"
//                     />
//                   </motion.h1>

//                   <motion.p
//                     className="text-lg text-gray-700 mb-6"
//                     initial="hidden"
//                     animate="visible"
//                     custom={3}
//                     variants={textVariant}
//                   >
//                     Securitynet, an advanced AI-powered camera software designed
//                     to revolutionize surveillance systems. Leveraging
//                     cutting-edge AI algorithms, it offers facial recognition,
//                     real-time alerts, and comprehensive monitoring.
//                   </motion.p>

//                   <motion.div
//                     className="lg:hidden flex items-center gap-5"
//                     initial="hidden"
//                     animate="visible"
//                     custom={4}
//                     variants={textVariant}
//                   >
//                     <Link
//                       href="https://securitynets.s3.amazonaws.com/securitynetai.pdf"
//                       className={`lg:hidden px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300`}
//                       target="_blank"
//                     >
//                       White Paper
//                     </Link>

//                     <Link
//                       href="/services"
//                       className={`lg:hidden px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300`}
//                     >
//                       Our Services
//                     </Link>
//                   </motion.div>
//                 </div>

//                 {/* Image Section */}
//                 <motion.div
//                   className="lg:w-5/12 w-full relative flex justify-center items-center"
//                   initial="hidden"
//                   animate="visible"
//                   variants={imageVariant}
//                 >
//                   <div className="rounded-3xl overflow-hidden  hover:scale-105 transition-transform duration-500">
//                     <Image
//                       src={img}
//                       width={703}
//                       height={732}
//                       className="w-full"
//                       alt=""
//                     />
//                     {/* <Image
//                       src={img}
//                       width={503}
//                       height={532}
//                       className="w-full"
//                       alt=""
//                     /> */}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Decorative Pattern */}
//       <HeroPattern
//         width={426}
//         height={476}
//         className="absolute bottom-0 right-0 opacity-20"
//       />

//       {/* Modal Video */}
//       <Transition
//         show={modalOpen}
//         as={Fragment}
//         afterEnter={() => videoRef.current?.play()}
//       >
//         <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
//           <Transition.Child
//             className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
//             enter="transition ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition ease-out duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             aria-hidden="true"
//           />
//           <Transition.Child
//             className="fixed inset-0 z-[99999] flex p-6"
//             enter="transition ease-out duration-300"
//             enterFrom="opacity-0 scale-75"
//             enterTo="opacity-100 scale-100"
//             leave="transition ease-out duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-75"
//           >
//             <div className="max-w-5xl mx-auto h-full flex items-center">
//               <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
//                 <video ref={videoRef} width="1920" height="1080" loop controls>
//                   <source src={value} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Dialog.Panel>
//             </div>
//           </Transition.Child>
//         </Dialog>
//       </Transition>

//       {/* Decorative Circle */}
//       <div className="bg-yellow-400 w-36 h-36 rounded-full absolute -bottom-8 right-2 -z-10"></div>
//     </section>
//   );
// };

// export default Hero;
