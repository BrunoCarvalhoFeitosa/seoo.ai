"use client"
import Image from "next/image"

export const BentoGridSection = () => {
  return (
    <section id="product" className="py-16 md:py-32 px-5 w-full bg-black">
      <div className="mx-auto lg:max-w-6xl">
        <div className="py-12 mx-auto lg:max-w-xl">
          <h2 className="text-2xl text-center text-white">
            Aproveite o poder da IA, tornando a otimização para mecanismos de busca intuitiva e eficaz para todos os níveis de habilidade.
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="p-6 lg:p-8 flex flex-col justify-end gap-10 w-full md:w-72 lg:w-90 h-100 border border-[#1E1D1F] rounded-md">
              <div className="flex justify-center">
                <Image
                  src="/images/bento-grid/image-bento-grid-01.png"
                  width={265}
                  height={205}
                  alt="Definição de metas de SEO"
                  className="animate-spin [animation-duration:6s]"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-xs">
                <h3 className="md:text-base lg:text-xl text-white">
                  Definição de metas de SEO
                </h3>
                <p className="md:text-sm lg:text-base text-neutral-400">
                  Ajuda você a definir e alcançar metas de SEO com assistência guiada.
                </p>
              </div>
            </div>
            <div className="relative p-6 lg:p-8 lg:pr-0 rounded-md w-full md:flex-1 h-100 border border-[#1E1D1F] overflow-hidden">
              <div className="flex justify-end">
                <Image
                  src="/images/bento-grid/image-bento-grid-02.png"
                  width={1000}
                  height={1000}
                  alt="Painel amigável"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 p-6 lg:p-8 flex flex-col justify-end w-full h-full bg-linear-to-b from-black/70 from-40% md:from-20% to-[#8C45FF]/85">
                <div className="flex flex-col gap-1 max-w-xs">
                  <h3 className="md:text-base lg:text-xl text-white">
                    Painel amigável
                  </h3>
                  <p className="text-sm lg:text-base text-white">
                    Realize auditorias e otimizações de SEO complexas com um único clique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="relative p-6 lg:p-8 lg:pr-0 rounded-md w-full md:flex-1 h-100 border border-[#1E1D1F] overflow-hidden">
              <div className="flex justify-end">
                <Image
                  src="/images/bento-grid/image-bento-grid-03.png"
                  width={600}
                  height={600}
                  alt="Relatórios visuais"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 p-6 lg:p-8 flex flex-col justify-end w-full h-full bg-linear-to-b from-black/70 from-40% md:from-20% to-[#8C45FF]/85">
                <div className="flex flex-col gap-1 max-w-xs">
                  <h3 className="md:text-base lg:text-xl text-white">
                    Relatórios visuais
                  </h3>
                  <p className="md:text-sm lg:text-base text-white">
                    Gerador de gráfico completo que mostra o desempenho de todo seu site.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-end gap-10 w-full md:w-72 lg:w-90 h-100 border border-[#1E1D1F] rounded-md">
              <div className="flex justify-center">
                <Image
                  src="/images/bento-grid/image-bento-grid-04.png"
                  width={265}
                  height={205}
                  alt="Gerador de palavras-chave"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-xs">
                <h3 className="md:text-base lg:text-xl text-white">
                  Gerador de palavras-chave
                </h3>
                <p className="md:text-sm lg:text-base text-neutral-400">
                  Sugestões automáticas e as melhores palavras-chave para segmentar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}