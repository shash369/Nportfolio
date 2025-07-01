"use client";
import { FaCss3, FaJava, FaJs, FaNodeJs, FaHtml5, FaSchool, FaReact, FaGithub, FaBootstrap, FaNode, FaAws, FaAngular } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiHibernate, SiEclipseide, SiJupyter, SiSpringboot, SiPostman } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgOrganisation } from "react-icons/cg";
//about data
const about = {
  icon: "/assets/profile/me-8.svg",
  title: "About me",
  description:"Full-stack developer with expertise in JavaScript, React, and Node.js, passionate about building technology that drives social impact. I've developed web applications that improved user engagement by 60% and optimized backend performance by 25%.",
    info: [
    {
      fieldName: "Name",
      fieldValue: "Shashwat Shukla"
    },
    {
      fieldName: "Email",
      fieldValue: "shashwatforscol@gmail.com"
    },
    {
      fieldName: "Status",
      fieldValue: "Open For Work"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)7355102285"
    },
    {
      fieldName: "Gender",
      fieldValue: "Male"
    },
    {
      fieldName: "Availability",
      fieldValue: "Allways"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Preference",
      fieldValue: "Backend Developer"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
    {
      fieldName: "Address",
      fieldValue: "Basti,Uttar Pradesh"
    },
  ],
};
//experience data

//education data
const education = {
  icon: "/assets/profile/education.svg",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Ajay kumar garg Engineering college",
      areaOfStudy: "B.tech in Computer Science and Information Science",
      percentage: "7.41 CGPA",
      duration: "December 2022 - current",
      location: "ghaziabad, U.P.",
    },
  ],
};
//skills data
const skills = {
  icon: "/assets/profile/skills.svg",
  title: "My Skills",
  description:"Computer Science and information technology student with full-stack development experience building applications using React, Node.js, and database systems. Seeking internship to develop production-ready solutions." ,
  skillList: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind",
    },
    {
      icon: <TbBrandCpp />,
      name: "C++ Programming",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
   
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaGithub />,
      name: "GitHub Tool",
    },
    {
      icon: <SiPostman />,
      name: "Postman Tool",
    },
    {
      icon: <VscVscode />,
      name: "VS Code IDE",
    },
  ],
};

import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold flex items-center gap-2">
                    <img src={skills.icon} alt="Experience Icon" className="w-10 h-10" />
                    {skills.title}</h3>
                  <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-7xl transition-all duration-300 group-hover:text-accent">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* experience */}      
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold flex items-center gap-2">
                  <img src={education.icon} alt="Experience Icon" className="w-10 h-10" />
                  {education.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                  {education.description}
                  
                </p>

                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="w-full bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-full text-center lg:text-left">
                            {item.areaOfStudy}</h3>
                          <div className="flex items-center gap-3">
                            {/* FaSchool Icon */}
                            <FaSchool className="text-accent w-5 h-5" />
                            <h3 className="text-xl max-w-full mt-2 text-center lg:text-left">
                              {item.institution}
                            </h3>
                          </div>
                          {/* Result */}
                          <p className="text-accent font-bold text-center lg:text-left">
                            <span className="text-white/60">Result:</span> {item.percentage}
                          </p>
                          {/* Location */}
                          <div className="flex items-center gap-2">
                            <GoLocation className="text-accent h-4 w-4" />
                            <p className="text-white/60">{item.location}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold flex items-center gap-2">
                <img src={about.icon} alt="Experience Icon" className="w-10 h-10" />
                  {about.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-full mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>

  );
};

export default Profile