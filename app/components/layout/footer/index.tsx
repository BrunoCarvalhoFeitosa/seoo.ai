"use client"

import { footerData } from "@/app/constants"
import { Logo } from "../../common/logo"
import { FaFacebookF, FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { RiWhatsappFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="py-14 px-5 border-y border-[#1E1D1F]">
        <div className="mx-auto lg:max-w-6xl flex flex-col">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-12 md:gap-0">
            <div className="w-full flex justify-center md:justify-start overflow-hidden">
              <Logo />
            </div>
            <div className="w-full">
              <ul className="w-full flex flex-col md:flex-row justify-center items-center gap-16 md:gap-10 lg:gap-20 xl:gap-24">
                {footerData.map((item) => (
                  <li key={item.id} className="text-center md:text-left">
                    <span className="text-lg text-white">
                      {item.title}
                    </span>
                    <div className="mt-6">
                      <ul className="flex flex-col gap-4">
                        {item.items.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="text-neutral-400 hover:text-neutral-600 transition-colors duration-300 cursor-pointer"
                          >
                            {subItem.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 mx-auto lg:max-w-6xl">
        <ul className="flex justify-center md:justify-end items-center gap-3">
          <li className="size-10 flex justify-center items-center rounded-lg border border-[#1E1D1F] bg-[#0C0C0C] hover:-translate-y-1.5 hover:-rotate-18 transition-transform duration-300 cursor-pointer">
            <FaFacebookF className="text-lg text-white" />
          </li>
          <li className="size-10 flex justify-center items-center rounded-lg border border-[#1E1D1F] bg-[#0C0C0C] hover:-translate-y-1.5 hover:rotate-18 transition-transform duration-300 cursor-pointer">
            <FaGithub className="text-lg text-white" />
          </li>
          <li className="size-10 flex justify-center items-center rounded-lg border border-[#1E1D1F] bg-[#0C0C0C] hover:-translate-y-1.5 hover:-rotate-18 transition-transform duration-300 cursor-pointer">
            <AiFillInstagram className="text-xl text-white" />
          </li>
          <li className="size-10 flex justify-center items-center rounded-lg border border-[#1E1D1F] bg-[#0C0C0C] hover:-translate-y-1.5 hover:rotate-18 transition-transform duration-300 cursor-pointer">
            <RiWhatsappFill className="text-xl text-white" />
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center">
        <span className="flex-1 h-1 bg-purple-950" />
        <span className="flex-1 h-1 bg-purple-700" />
        <span className="flex-1 h-1 bg-purple-500" />
        <span className="flex-1 h-1 bg-purple-300" />
      </div>
    </footer>
  )
}
