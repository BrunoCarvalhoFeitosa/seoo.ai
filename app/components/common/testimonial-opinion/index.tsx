"use client"
import { useRef, useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa6"
import Image from "next/image"

export const TestimonialOpinion = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handlePlayTestimonialAudio = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      audio.play()
      setIsPlayingAudio(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setIsPlayingAudio(false)
      }, 5000)
    } else {
      audio.pause()
      setIsPlayingAudio(false)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }

  return (
    <div className="flex justify-center items-center gap-4 md:gap-12 border-y border-[#1E1D1F]">
      <div className="relative flex justify-center w-50 h-50 border-x border-[#1E1D1F]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.45)_0%,rgba(0,0,0,0)_100%)] blur-3xl pointer-events-none animate-pulse [animation-duration:2s] z-0" />
        <div className="absolute top-2/4 -translate-y-2/4 left-0 w-px h-[180%] bg-[#1E1D1F]" />
        <div className="absolute top-2/4 -translate-y-2/4 right-0 w-px h-[180%] bg-[#1E1D1F]" />
        <div className="group relative flex justify-center items-center">
          <div className="absolute bottom-4 -left-4 z-10">
            <div className="flex justify-center items-center size-16 border border-white rounded-full">
              <button
                type="button"
                className="flex justify-center items-center size-12 bg-white group-hover:bg-[#7A11DD] rounded-full transition-colors duration-300"
                onClick={handlePlayTestimonialAudio}
              >
                {isPlayingAudio ? (
                  <FaPause className="text-lg text-black group-hover:text-white transition-colors duration-300" />
                ) : (
                  <FaPlay className="text-lg text-black group-hover:text-white transition-colors duration-300" />
                )}
              </button>
            </div>
          </div>
          <div>
            <audio ref={audioRef} preload="auto">
              <source src="/audio/testimonial.mp3" type="audio/mp3" />
            </audio>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/testimonials/image-avatar.png"
              width={217}
              height={217}
              alt="Avatar"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-50 md:max-w-xs">
        <q className="text-sm md:text-base italic">
          Este produto transformou completamente a forma como gerencio meus projetos e prazos.
        </q>
        <p className="mt-4 text-sm md:text-base font-semibold">
          Cleonice Carvalho
        </p>
        <p className="text-xs md:text-sm text-neutral-400">
          Diretora de Marketing @Quantum
        </p>
      </div>
    </div>
  )
}