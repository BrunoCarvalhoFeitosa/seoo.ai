"use client"
import clsx from "clsx"
import { pricesData } from "@/app/constants"
import { FaCheck } from "react-icons/fa6"

export const PricesSection = () => {
  return (
    <section id="prices" className="py-20 px-5 w-full bg-black">
      <div className="mx-auto lg:max-w-6xl">
        <div className="py-22 mx-auto md:max-w-xl flex flex-col gap-3">
          <h4 className="text-5xl text-center text-white">
            Preços
          </h4>
          <p className="text-lg text-center text-white">
            Escolha o plano certo para atender às suas necessidades de SEO e comece a otimizar hoje mesmo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pricesData.map((price, index) => {
            const isLeft = index === 0
            const isMiddle = index === 1
            const isRight = index === 2

            return (
              <div
                key={index}
                className={clsx(
                  "flex flex-col rounded-lg min-h-130 border relative overflow-hidden",
                  isMiddle ? "bg-linear-to-b from-black via-[#14052b] to-[#2a0a4a] border-[#1E1D1F]" : "bg-black border-[#1E1D1F]"
                )}
              >
                {isLeft && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -right-1/2 top-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(140,69,255,0.35)_0%,rgba(0,0,0,0)_60%)] blur-3xl" />
                  </div>
                )}
                {isMiddle && (
                  <div className="absolute inset-0 pointer-events-none opacity-40 grid grid-cols-4 grid-rows-6">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-dashed border-white/15"
                      />
                    ))}
                  </div>
                )}
                {isRight && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -left-1/2 top-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(140,69,255,0.35)_0%,rgba(0,0,0,0)_60%)] blur-3xl" />
                  </div>
                )}
                <div className="p-5 flex flex-col gap-2 border-b border-white/10 relative bg-black">
                  <span className="text-3xl text-white">
                    {price.name}
                  </span>
                  <span className="text-lg text-neutral-400">
                    {price.price}
                  </span>
                </div>
                <div className="px-5 py-10 flex flex-1 flex-col gap-y-5 relative">
                  {price.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                      <FaCheck className="text-base text-white" />
                      <span className="text-white">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full p-5 pt-0 relative">
                  <button
                    type="button"
                    className={clsx(
                      "py-3 px-5 w-full flex justify-center border border-white/20 text-white rounded-lg transition-colors duration-300",
                      isMiddle ? "bg-[#7A11DD] hover:opacity-85" : "bg-[#1E1E1E] hover:opacity-85"
                    )}
                  >
                    Escolher este plano
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
