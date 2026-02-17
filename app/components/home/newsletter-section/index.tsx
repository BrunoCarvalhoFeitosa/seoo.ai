"use client"

export const NewsletterSection = () => {
  return (
    <section id="newsletter" className="pt-8 pb-32 px-5 w-full bg-black">
      <div className="relative py-20 mx-auto lg:max-w-6xl border border-[#1E1D1F] rounded-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40 grid grid-cols-12 grid-rows-5">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="border border-dashed border-white/15"
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#8C45FF]/35 from-20% to-black z-0" />
        <div className="p-5 mx-auto max-w-lg flex flex-col">
          <div className="mb-10 w-full">
            <h5 className="text-3xl md:text-5xl text-center text-white">
              SEO com inteligência artificial para todos.
            </h5>
          </div>
          <div className="mb-6 w-full">
            <form className="relative p-4 flex items-center border border-neutral-700 rounded-lg">
              <input
                type="email"
                placeholder="E-mail"
                className="pr-40 w-full"
                maxLength={100}
              />
              <button
                type="button"
                className="absolute right-2 py-2 px-3 md:px-6 bg-white rounded-lg text-black"
              >
                Cadastrar-me
              </button>
            </form>
          </div>
          <div className="relative flex justify-center items-center gap-3">
            <span className="text-xs text-neutral-400">
              Não é necessário cartão de crédito
            </span>
            <span className="size-1 rounded-full bg-neutral-400" />
            <span className="text-xs text-neutral-400">
              7-dias de frete grátis
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}