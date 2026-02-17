"use client"
import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import Link from "next/link"

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleShowOrHidePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-3xl text-white">
          Bem vindo
        </h1>
        <p className="text-neutral-400">
          Entre e comece a performar seu site.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <button
          type="button"
          className="py-3 px-6 flex items-center gap-2 rounded-lg bg-[#0B0B0B] border border-[#1E1D1F]"
        >
          <FcGoogle className="text-2xl" />
          Entrar com o Google
        </button>
      </div>
      <div className="my-3 flex items-center gap-1">
        <span className="flex-1 h-px bg-[#1E1D1F]" />
        <span className="text-neutral-400">
          ou
        </span>
        <span className="flex-1 h-px bg-[#1E1D1F]" />
      </div>
      <div className="mt-8">
        <form className="flex flex-col">
          <div className="mb-8 relative flex flex-col">
            <label
              htmlFor="email"
              className="absolute -top-4 left-2 py-0.5 px-3 bg-black border border-[#1E1D1F] rounded-md text-sm cursor-pointer"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="jonathan_doe@email.com"
              maxLength={150}
              className="px-3 h-12 border border-[#1E1D1F] rounded-md"
            />
          </div>
          <div className="mb-4 relative flex flex-col">
            <label
              htmlFor="password"
              className="absolute -top-4 left-2 py-0.5 px-3 bg-black border border-[#1E1D1F] rounded-md text-sm cursor-pointer"
            >
              Senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Insira sua senha"
              maxLength={75}
              className="px-3 h-12 border border-[#1E1D1F] rounded-md"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={handleShowOrHidePassword}
            >
              {showPassword ? (
                <IoMdEyeOff className="text-2xl text-neutral-800" />
              ) : (
                <IoMdEye className="text-2xl text-neutral-800" />
              )}
            </button>
          </div>
          <div className="p-1.5 h-16 flex items-center border bg-black border-[#1E1D1F] rounded-lg">
            <button
              type="submit"
              className="w-full h-full border border-[#1E1D1F] rounded-lg bg-[#7A11DD] text-lg hover:opacity-85 transition-opacity duration-300"
            >
              Acessar minha conta
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 flex justify-center items-center gap-1">
        <span className="text-sm">
          Não tem uma conta?
        </span>
        <span className="text-sm underline text-[#8C45FF]">
          <Link href="/account/sign-up">
            Cadastre-se agora
          </Link>
        </span>
      </div>
    </div>
  )
}

export default SignInPage
