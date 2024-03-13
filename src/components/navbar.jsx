"use client"

import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import Image from "next/image";

const links = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Services",
        url: "/services"
    },
    {
        title: "About Us",
        url: "/about"
    },
    {
        title: "Jobs",
        url: "/jobs"
    },
    {
        title: "Contact",
        url: "/contact"
    }
]
 
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
          rotate: 0,
        },
        opened: {
          rotate: 45,
          backgroundColor: "rgb(255,255,255)",
        },
      };
      const centerVariants = {
        closed: {
          opacity: 1,
        },
        opened: {
          opacity: 0,
        },
      };
    
      const bottomVariants = {
        closed: {
          rotate: 0,
        },
        opened: {
          rotate: -45,
          backgroundColor: "rgb(255,255,255)",
        },
      };
    
      const listVariants = {
        closed: {
          x: "100vw",
        },
        opened: {
          x: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      };
    
      const listItemVariants = {
        closed: {
          x: -10,
          opacity: 0,
        },
        opened: {
          x: 0,
          opacity: 1,
        },
      };

    return (
        <div className='h-full flex items-center justify-between overflow-hidden bg-[#243928] pr-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LOGO */}
            <div className="md:flex xl:w-1/3">
                <Link href="/" className="text-sm rounded-md font-semibold flex items-center justify-center">
                <Image
                src="/dark logo.jpg"
                alt="Logo image"
                width={150}
                height={150}
                />
                    <span className="text-white mr-1 text-xl hidden">Guiding Hands</span>
                </Link>                
            </div>

            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-2/3 justify-end text-[#DCF28C] h-full items-center">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} className="h-full" />
                ))}
            </div>


            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative " onClick={() => setOpen((prev) => !prev)}>
                    <div className={open ? "w-10 h-1 bg-white rounded origin-left" : "w-10 h-1 bg-[#DCF28C] rounded origin-left"} variants={topVariants}></div>
                    <div className={open ? "w-10 h-1 bg-white rounded origin-left" : "w-10 h-1 bg-[#DCF28C] rounded origin-left"} variants={centerVariants}></div>
                    <div className={open ? "w-10 h-1 bg-white rounded origin-left" : "w-10 h-1 bg-[#DCF28C] rounded origin-left"} variants={bottomVariants}></div>
                </button>

                {/* MENU LIST */}
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-70 text-white flex flex-col items-center justify-center gap-8 text-4xl z-20"
                    variants={listVariants}>
                        {links.map(link=>(
                            <Link href={link.url} key={link.url} variants={listItemVariants} onClick={() => setOpen((prev) => !prev)} className="text-2xl font-semibold ">{link.title}</Link>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar