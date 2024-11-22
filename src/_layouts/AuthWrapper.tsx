import AuthIcon from '@/assets/svg/AuthIcon.svg?react'
import Logo from '@/assets/svg/AuthLogo.svg?react'
import Logo2 from '@/assets/svg/DashboardLogo.svg?react'
interface AuthWrapperProps {
    children : React.ReactNode
}
const AuthWrapper = ({children}: AuthWrapperProps) => {
  return (
    <div className="m-0 h-screen w-full md:grid md:grid-cols-auth">
    <div className="h-screen bg-no-repeat bg-[length:100%_100%] hidden md:flex bg-auth" >
      <div className='h-screen p-4 h-full flex flex-col justify-between w-full items-baseline'>
        <Logo className='absolute top-2' />
        <div className='flex flex-col justify-end absolute right-[45%] left-5 bottom-6 '>
          <AuthIcon className='md:h-[65%] lg:h-[100%]'/>
        <h3 className='text-3xl font-bold text-white'>Managing reviews made easy.</h3>
        <p className='text-white text-base '>
          Get better reach to your potential customers and build your brand with us. We are here to help you position a yourself as an expert in your defined niche.
        </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start p-4 items-center overflow-y-auto h-full">
      <span className="self-start p-4 md:hidden"><Logo2 height='50' width='150' /></span>
      
      {children}
    </div>
  </div>
  )
};

export default AuthWrapper;
