import Link  from "next/link";
import{ FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {SiLeetcode } from "react-icons/si";
const socials=[
  { icon: <FaGithub />, path: "https://github.com/shash369?tab=overview&from=2023-12-01&to=2023-12-31", title: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin", title: "LinkedIn" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/shashwatshukla/", title: "LeetCode" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/kuch_nahi_shashwat/", title: "Instagram" },
] ;
const Social = ({ containerStyles,iconStyles })=>{
   return(
    <div className ={containerStyles}>
      {socials.map((item, index)=>{
        return(
          <Link key={index}href={item.path} target="_blank" className={iconStyles} title={item.title}>
             {item.icon}
          </Link >
        ) ;
      }) }
     </div>
  ) ;
} ;
export default Social ;
