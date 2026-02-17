"use client"
import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section id="begin" className="relative px-5 w-full flex flex-col bg-black overflow-hidden">
      <div className="absolute -bottom-70 md:bottom-0 lg:bottom-80 left-1/2 -translate-x-1/2 w-300 h-225 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.45)_0%,rgba(0,0,0,0)_85%)] blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-70 md:bottom-0 lg:bottom-80 left-1/2 -translate-x-1/2 w-175 h-150 bg-[radial-gradient(circle,rgba(192,132,252,0.6)_0%,rgba(0,0,0,0)_60%)] blur-2xl pointer-events-none z-0" />
      <div className="absolute top-[20%] translate-y-[0%] md:top-[18%] md:translate-y-[0%] lg:top-[15%] lg:translate-y-0 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="relative flex items-center justify-center w-110 h-110 md:w-150 md:h-150 lg:w-300 lg:h-300 rounded-full border border-dashed border-white/8">
          <div className="absolute w-90 h-90 md:w-110 md:h-110 lg:w-225 lg:h-225 rounded-full border border-dashed border-white/8" />
          <div className="absolute w-64 h-64 md:w-72 md:h-72 lg:w-150 lg:h-150 rounded-full border border-dashed border-white/8" />
          <div className="absolute w-28 h-28 md:w-40 Md:h-40 lg:w-75 lg:h-75 rounded-full border border-dashed border-white/8" />
        </div>
      </div>
      <div className="pt-15 relative mx-auto lg:max-w-7xl 2xl:max-w-420 h-135 lg:h-160 flex flex-col justify-center items-center overflow-hidden z-10">
        <div className="flex flex-col items-center gap-6 md:w-140 lg:w-195 xl:w-240">
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight leading-none text-center">
            <span className="text-white">
              Aumente sua
            </span>
            <span className="bg-linear-to-b from-white to-[#B372CF] text-transparent bg-clip-text">
              performance com IA.
            </span>
          </h1>
          <p className="mx-auto lg:w-145 text-lg text-center text-neutral-300">
            Aumente a visibilidade do seu site sem esforço com IA, onde a tecnologia inteligente encontra ferramentas de SEO fáceis de usar.
          </p>
          <div className="p-2 border border-white rounded-full">
            <Link href="/account/sign-up">
              <button
                type="button"
                className="py-3 px-8 border border-white rounded-full bg-white text-lg italic text-black font-medium hover:opacity-80 hover:animate-pulse transition-all duration-200"
              >
              Começar agora de graça
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center z-20">
        <Image
          src="/images/hero/hero-image.png"
          width={1098}
          height={658}
          alt=""
          className="shadow-2xl shadow-[#8C45FF]"
        />
      </div>
    </section>
  )
}
