import PageIcon from '@/assets/svg/AttachBuisnessPageIcon.svg?react'
import GoogleIcon from '@/assets/svg/GoogleIcon.svg?react'
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

const AttachBuisnessComponent = () => {
  const {handleLinkGoogleBuisnessAccount, isLoading} = useAuth();
  const navigate = useNavigate()
  return (
    <div className='flex flex-col pb-6 justify-between  items-center'>
      <div className='h-full items-center flex'><PageIcon /></div>
      <div>
      <h1 className='text-2xl md:text-3xl text-center font-bold  bg-secondary-gradient bg-clip-text text-fill'>Please connect your  Google Business Profile.</h1>
      <p className='text-gray-500 mt-1 text-base text-center'>To connect, you will need to be the owner or admin. This allows us to monitor your reviews.</p>
      <Button className='w-full mt-6' onClick={handleLinkGoogleBuisnessAccount}>
        {isLoading? 
        (
          <Loader2 className='animate-spin'/>
        ): (

        <><GoogleIcon/>Link Google Business Account</>
        )}
        </Button>
      <Button variant='outline' className='w-full mt-5 mb-2' onClick={()=>{navigate('/')}}>I'll do it later</Button>
      </div>
    </div>
  )
};

export default AttachBuisnessComponent;
