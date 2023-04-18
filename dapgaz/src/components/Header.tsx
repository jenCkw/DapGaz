import Link from "next/link";
import { useState } from "react";
import NavMob from "./NavMob/NavMob";
import {links } from '../moks/servicesData'

function Header() {
    const [open, setOpen] = useState(false)
    const isOpen = () => setOpen(!open)
    return (
      <header className="bg-white">
        <div
          className={`lg:container lg:mx-auto px-6 py-10 flex justify-between items-center`}
        >
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dnzidlufh/image/upload/v1681626123/DapLogo_n4zvjc.jpg"
              className="h-10 w-55"
              alt="logo"
            />
          </Link>

          {/* hamburger menu */}
          <div
            onClick={isOpen}
            className="w-7 h-7 flex flex-col gap-1 cursor-pointer lg:hidden justify-center items-center"
          >
            <div
              className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${
                open
                  ? "rotate-[-45deg] translate-x-[-5px] translate-y-[8px]"
                  : "rotate-0"
              }`}
            ></div>
            <div
              className={`h-1 bg-bgDarkBlue transition-all ease-in duration-300 w-full ${
                open ? "opacity-0" : "opacity-1"
              }`}
            ></div>
            <div
              className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${
                open
                  ? "rotate-[45deg] translate-x-[-5px] translate-y-[-8px]"
                  : "rotate-0"
              }`}
            ></div>
          </div>
          {open && <NavMob />}
          <nav className="hidden lg:flex lg:gap-10 text-clDarkBlue list-none z-40">
            {links.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="text-clDarkBlue transition ease-in duration-300 text-lg hover:text-clGrayish"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex flex-col lg:items-end">
            <Link
              className="text-white text-xl bg-[#FC7F2A] px-8 py-3 z-50 rounded"
              href="#"
            >
              Commandez
            </Link>
          </div>
        </div>
      </header>
    );
}

export default Header
