"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { sponsorsData } from "@/app/constants"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export const SponsorsSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current

    if (!el) {
      return
    }

    const ctx = gsap.context(() => {
      const totalWidth = el.scrollWidth / 2
      let direction = -1
      let speed = 1

      const tween = gsap.to(el, {
        x: `+=${totalWidth}`,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x)
            return `${gsap.utils.wrap(-totalWidth, 0, value)}px`
          }
        }
      })

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          direction = self.direction === 1 ? 1 : -1

          gsap.to(tween, {
            timeScale: direction * speed,
            duration: 0.2,
            ease: "power2.out"
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="sponsors" className="py-18 lg:py-20 mx-auto container overflow-x-clip">
      <div className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex items-center gap-6 md:gap-24 w-max"
        >
          {sponsorsData.map((Sponsor) => (
            <Image
              key={`first-${Sponsor.name}`}
              src={Sponsor.image}
              width={130}
              height={45}
              alt={Sponsor.name}
            />
          ))}
          {sponsorsData.map((Sponsor) => (
            <Image
              key={`second-${Sponsor.name}`}
              src={Sponsor.image}
              width={130}
              height={45}
              alt={Sponsor.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
