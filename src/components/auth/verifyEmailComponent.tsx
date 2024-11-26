import VerifyEmailIcon from '@/assets/svg/VerifyEmailIcon.svg?react'
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';

const VerifyEmailComponent = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col pb-6  items-center'>
      <div className='h-full items-center flex'><VerifyEmailIcon/></div>
      <div>
      <h1 className='text-2xl md:text-3xl text-center mb-2 font-bold bg-secondary-gradient bg-clip-text text-fill'>Verify your email.</h1>
      <p className='text-gray-500 text-base text-center'>An email has been sent to your email address <strong>(laoshe.lao@gmail.com)</strong>. Please verify your email address by clicking on the link.</p>
      <Button className='w-full mt-6'><a href="mailto:" target="_blank" rel="noopener noreferrer" className='w-full'>Open email app</a></Button>
      <Button variant='outline' className='w-full mt-5' onClick={()=>{navigate('/attachbuisness')}}>I'll do it later</Button>
      <p className='text-xs mt-4 text-center text-gray-500'>Didn’t received the email then check your 
      spam folder or  <Link className='text-secondary underline font-semibold' to={''} >try again.</Link>  </p> 
      </div>
    </div>
  )
};

export default VerifyEmailComponent;
