// "use client";

// import { motion } from "framer-motion";
// import React, { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import Link from "next/link";
// import Image from "next/image";
// import WorkSliderBtns from "@/components/WorkSliderBtns";

// const projects = [
//   {
//     num: "07",
//     category: "Tic-Tac-Toe Game",
//     title: "Project 7",
//     description: "A classic two-player Tic-Tac-Toe game where players take turns marking Xs and Os on a grid. The goal is to be the first to align three marks in a row, column, or diagonal.",
//     stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
//     image: "/assets/project/project7.png",
//     live: "https://atv23.github.io/Tic-Tac-Toe/",
//     github: "https://github.com/Atv23/Tic-Tac-Toe",
//   },
//   {
//     num: "08",
//     category: "Dice Game",
//     title: "Project 8",
//     description: "A fun, luck-based dice game where players choose to be Player 1 or Player 2, roll the dice, and let fate decide the winner. The game keeps track of each player's wins for added competition.",
//     stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
//     image: "/assets/project/project8.png",
//     live: "no",
//     github: "https://github.com/Atv23/Dice_Game",
//   },
//   {
//     num: "09",
//     category: "Sorting Visualisation",
//     title: "Project 9",
//     description: "An interactive Sort visualization built during my learning to explore DSA. It features dynamic array generation, step-by-step sorting, and color-coded comparisons, providing an engaging way for beginners to understand the sorting process.",
//     stack: [{ name: "HTML 5" }],
//     image: "/assets/project/project9.png",
//     live: "https://atv23.github.io/Bubble-Sort-Visualisation/",
//     github: "https://github.com/Atv23/Bubble-Sort-Visualisation",
//   },
//   {
//     num: "10",
//     category: "ToDo List - Full Stack Project",
//     title: "Project 10",
//     description: "A dynamic to-do list application that enables users to create, manage, and delete tasks across multiple categories. It stores data in a database, providing seamless user interaction and organized task management.",
//     stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" },{ name: "Node.js" },{ name: "EJS" },{ name: "MongoDB" }],
//     image: "/assets/project/project10.png",
//     live: "no",
//     github: "no",
//   },
//   {
//     num: "12",
//     category: "Keyboard Instruments",
//     title: "Project 12",
//     description: "An interactive JavaScipt project that plays instrument sounds when specific keys on the keyboard are pressed, displaying the key name along with a picture of the instrument.",
//     stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
//     image: "/assets/project/project12.png",
//     live: "no",
//     github: "no",
//   },
  
// ];

// const Project = () => {
//   const [project, setProject] = useState(projects[0]);
//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;
//     setProject(projects[currentIndex]);
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 overflow-hidden"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
//             <div className="flex flex-col gap-[30px] h-[50%]">
//               {/* Outline num */}
//               <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
//                 {/* {project.num} */}
//                 {projects.indexOf(project) + 1}
//               </div>
//               {/* project category */}
//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
//                 {project.category}
//               </h2>
//               {/* project description */}
//               <p className="text-white/60" style={{ textAlign: 'justify' }}>{project.description}</p>
//               {/* stack */}
//               <ul className="flex gap-4">
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li key={index} className="text-xl text-accent">
//                       {item.name}
//                       {/* remove the last comma */}
//                       {index !== project.stack.length - 1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>
//               {/* border */}
//               <div className="border border-white/20"></div>
//               {/* buttons */}
//               <div className="flex items-center gap-4">
//                 {project.live !== "no" ? (
//                   // <Link href={project.live} target="_blank">
//                   <Link
//                     href={project.live}
//                     target="_blank"
//                   >
//                     <TooltipProvider delayDuration={100}>
//                       <Tooltip>
//                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                           <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Live project</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </Link>
//                 ) : (
//                   <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-not-allowed">
//                     <BsArrowUpRight className="text-gray-500 text-3xl" />
//                   </div>
//                 )}
//                 {/* gitHub project button */}
//                 {project.github !== "no" ? (
//                   <Link href={project.github} target="_blank">
//                     <TooltipProvider delayDuration={100}>
//                       <Tooltip>
//                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                           <BsGithub className="text-white text-3xl group-hover:text-accent" />
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>GitHub repository</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </Link>
//                 ) : (
//                   <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-not-allowed">
//                     <BsGithub className="text-gray-500 text-3xl" />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-[50%]">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="xl:h-[520px] mb-12"
//               onSlideChange={handleSlideChange}
//             >
//               {projects.map((project, index) => {
//                 return (
//                   <SwiperSlide key={index} className="w-full">
//                     <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
//                       {/* overlay */}
//                       <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                       {/* Image */}
//                       <div className="relative w-full h-[100%] flex justify-center items-center overflow-hidden">
//                         <Image
//                           src={project.image}
//                           fill
//                           className="object-fill"
//                           alt="Project Cover"
//                           priority
//                         />
//                       </div>

//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//               {/* slider buttons */}
//               <WorkSliderBtns
//                 containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
//                 btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
//               />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Project;