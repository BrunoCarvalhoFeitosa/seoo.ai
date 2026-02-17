"use client"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="p-1 w-13 h-13 flex justify-center items-center border border-[#1E1D1F] rounded-md">
        <div className="relative p-1 w-9 h-9 rounded-full bg-[#8C45FF]">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(0,0,0,0)_70%)]" />
        </div>
      </div>
      <span className="text-lg">
        SEOO.ai
      </span>
    </Link>
  )
}
