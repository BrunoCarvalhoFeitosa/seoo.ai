"use client"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/all"
import { Logo } from "../../common/logo"
import { headerData } from "@/app/constants"
import Link from "next/link"

gsap.registerPlugin(ScrollToPlugin)

export const Header = () => {
  const handleScrollTo = (scrollToId: string) => {
    const element = document.querySelector(scrollToId)

    if (!element) {
      return
    }

    gsap.to(window, {
      scrollTo: { y: element, offsetY: 50 },
      duration: 6,
      ease: "power2.inOut"
    })
  }

  return (
    <header className="fixed top-0 left-0 px-5 py-4 w-full bg-black border-b border-[#1E1D1F] z-999">
      <div className="mx-auto lg:max-w-6xl flex justify-between items-center gap-6 lg:gap-0">
        <div className="overflow-hidden">
          <Logo />
        </div>
        <div className="hidden md:block px-5 md:px-10 py-1.5 md:py-3 border border-[#1E1D1F] rounded-full">
          <nav>
            <ul className="flex items-center md:gap-6 lg:gap-8">
              {headerData.map((item) => (
                <li
                  key={item.id}
                  className="text-neutral-500 hover:text-neutral-600 transition-transform duration-100 hover:scale-105 cursor-pointer"
                  onClick={() => handleScrollTo(item.href)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden lg:flex items-center gap-3">
          <Link href="/account/sign-in" className="text-neutral-500">
            Entre
          </Link>
          <Link href="/account/sign-up" className="text-[#8C45FF]">
            Cadastre-se
          </Link>
        </div>
      </div>
    </header>
  )
}