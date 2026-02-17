"use client"

import { advantagesData } from "@/app/constants"
import Image from "next/image"

export const AdvantagesSection = () => {
  return (
    <section id="advantages" className="relative py-15 md:py-20 px-5 w-full bg-linear-to-tr from-[#8C45FF] to-black to-90% md:to-75% border border-[#1E1D1F] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-125 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.45)_0%,rgba(0,0,0,0)_100%)] blur-3xl pointer-events-none z-0" />
      <div className="mx-auto lg:max-w-6xl">
        <div className="mb-18">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
            Aprimore a performance de suas aplicações.
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-12 lg:gap-15 w-full">
          {advantagesData.map((advantage, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    src={advantage.image}
                    width={20}
                    height={20}
                    alt={advantage.title}
                  />
                </span>
                <span className="text-lg">
                  {advantage.title}
                </span>
              </div>
              <div className="mt-1">
                <p className="text-neutral-400">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
