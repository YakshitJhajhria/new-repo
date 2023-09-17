import Image from 'next/image'
import React from 'react'
import Hovercontent from './Hover-content'

const Profilehover = () => {
  return (
    <>
    <div className='group hover:opacity-90 relative w-[48px] h-[48px]'>
    <Image src="/img/profile-photo.png" width={48} height={48} alt='profile-pic'/>
    </div>
    <div className="absolute right-[-105%] hidden group-hover:block group-hover:right-[10px]">
    <Hovercontent/>
    </div>
    </>
  )
}

export default Profilehover
