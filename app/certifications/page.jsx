"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const certifications = [
  {
    num: "01",
    title: "The complete Web Dev",
    href: "https://drive.google.com/file/d/1d_9jNHRd3zpWIkj-A7c1i60sO9qX2l2f/view?usp=drive_link",
    org:"Udemy",
  },
  {
    num: "02",
    title: "Node.js Bootcamp",
    href: "https://drive.google.com/file/d/1t0Nm_rZ3TOZ1JaqU_m2NzZD1dRjKB_3L/view?usp=drive_link",
    org:"LetsUpgrade",
  },
  {
    num: "03",
    title: "Deloitte Data analytics job sim",
    href: "https://drive.google.com/file/d/1Q_X89TgQUR6zf_qyUXIINySCSjYZ53QJ/view?usp=drive_link",
    org:"Forage",
  },
  {
    num: "04",
    title: "Goldman Sachs Software Engineering job sim",
    href: "https://drive.google.com/file/d/11SywrzKrxgQ2J8ss77twNBlt-1H30Ojy/view?usp=drive_link",
    org:"Forage",
  },
  {
    num:"05",
    title:"Introduction to cyber security",
    href:"https://drive.google.com/file/d/1Y7i_uT6rw7Wqa4gO3EsD4NfZMNb8e20y/view?usp=drive_link",
    org:"Infosys SpringBoard",
  },
  {
    num:"06",
    title:"code For the Web",
    href:"https://drive.google.com/file/d/1ScdXC5jvy2u5dcPYoY3AU5WGB8ZDr3eH/view?usp=drive_link",
    org:"University of Leeds",
  },{
    num:"07",
    title:"Python Programming",
    href:"https://drive.google.com/file/d/1sjYFVfSGNjFpOj3w1RRyy_w8jQnVvaBv/view?usp=drive_link",
    org:"Infosys SpringBoard",
  },
];

const Certifications = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {certifications.map((certification, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-3 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{certification.num}</div>
                  <Link href={certification.href} target="_blank"
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-4xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {certification.title}
                </h2>

                {/* org */}
                <p style={{ textAlign: 'justify' }}>{certification.org}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
