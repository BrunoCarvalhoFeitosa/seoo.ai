import { Logo } from "@/app/components/common/logo"
import { TestimonialOpinion } from "@/app/components/common/testimonial-opinion"

interface AccountLayoutPageProps {
  children: React.ReactNode
}

const AccountLayoutPage = ({ children }: AccountLayoutPageProps) => {
  return (
    <main className="p-5 w-full h-dvh bg-black">
      <div className="flex flex-col xl:flex-row lg:gap-8 w-full h-full rounded-lg">
        <div className="w-full xl:w-[45%]">
          <Logo />
          <div className="mt-8">
            {children}
          </div>
        </div>
        <div className="p-5 w-full flex-1 xl:w-[55%] hidden xl:flex flex-col justify-center items-center bg-[#0B0B0B] rounded-2xl">
          <div className="block">
            <TestimonialOpinion />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AccountLayoutPage
