"use client"
import { TestimonialOpinion } from "../../common/testimonial-opinion"

export const TestimonialsSection = () => {
  return (
    <section id="clients" className="py-10 px-5 w-full bg-black">
      <div className="mx-auto lg:max-w-6xl">
        <div className="py-22 mx-auto md:max-w-xl flex flex-col gap-3">
          <h4 className="text-5xl text-center text-white">
            Clientes
          </h4>
          <p className="text-lg text-center text-white">
            Ouça em primeira mão como nossas soluções impulsionaram o sucesso online de usuários como você.
          </p>
        </div>
        <div className="mt-14">
          <TestimonialOpinion />
        </div>
      </div>
    </section>
  )
}