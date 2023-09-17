import Image from 'next/image'
import React from 'react'
import { DownArrowIcon, EditIcon, EditIcon1, StarIcon } from '../common/icons'
import Button from './Button'

const Hovercontent = () => {
  return (
    <div className='max-w-[408px] w-full rounded-[12px] bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_4px_rgba(16,24,40,0.08)] flex flex-col gap-[15px] p-3'>
    <div className="flex gap-[20px] max-w-[341px] w-full p-3 bg-white border border-springtimerain rounded-[12px] h-[100px] mx-auto">
      <Image src="/img/profile-photo.png" className='w-[72px] h-[72px]' width={72} height={72} alt="Profile-
      Photo"/>
      <div className="flex justify-between items-center max-w-[245px] w-full">
         <div className="flex flex-col gap-1 w-[136px]">
         <p className='text-black font-poppins text-[18px] font-medium leading-[28px]'>
          Olivia Rhye
          </p>
          <div className="flex w-[79px] items-center h-[22px] px-1 gap-[6px] rounded-[16px] bg-sugarcrystral">
              <StarIcon/>
              <p className='text-dragonlordpurple text-center font-poppins text-[12px] font-medium leading-[18px]'>
              Level 2
              </p>
          </div>
          <div className="flex gap-1 items-center">
                  <EditIcon1/>
                  <p className='text-flintstone text-center font-poppins text-[12px] font-medium leading-[18px]'>
                  Update Your Profile
                  </p>
              </div>
         </div>
         <div className='flex items-centetr justify-center'>
          <DownArrowIcon/>
         </div>
      </div>
    </div>
    <Button/>
  </div>
  )
}

export default Hovercontent
