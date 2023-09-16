import React from 'react'
import Image from 'next/image'
import { cards } from '../common/helper'
import { PlusIcon } from '../common/icons'

const Card = () => {
  return (
   <>
   {cards.map((items, index) => (
     <div key={index} className='max-w-[344px] w-full h-[110px] p-2 flex gap-[12px] mt-3 mx-auto bg-white rounded-[12px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_4px_rgba(16,24,40,0.08)]'>
     <div className='w-[96px]'>
     <div className="absolute">
        <Image src={items.img} width={96} height={92} alt="card-image"/>
      </div>
      <div className='relative bg-drunkendragonfly p-2 w-[93px] h-[24px] flex justify-center items-center gap-1 top-1 left-[-8px] rounded-r-[5px]'>
          <p className='text-[10px] text-white text-center font-poppins font-medium leading-normal tracking-[-0.11px]'>
            {items.label}
          </p>
        </div>
     </div>
      <div className="flex flex-col gap-1 max-w-[186px] w-full">
        <p className='text-black font-poppins text-[14px] leading-[20px] font-medium'>
       {items.title}
        </p>
        <p className='text-flintstone text-[10px] leading-[18px] font-normal font-poppins'>
       {items.about}
        </p>
        <div className="flex gap-[11px]">
          {items.li.map((list, index) => (
          <div key={index} className="px-2 py-[2px] flex justify-center items-center gap-[3px] rounded-[6px] border border-reservedblue bg-white">
            <p className='text-blackriverfalls text-center font-poppins text-[10px] font-medium leading-[18px] p-0 m-0'>
            {list.tag}
            </p>
          </div>
          ))}
        </div>
      </div>
      <div>
        {items.icon}
      </div>
    </div>
   ))}
   <div className='max-w-[344px] w-full h-[110px] p-2 flex mx-auto bg-white rounded-[12px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_4px_rgba(16,24,40,0.08)] justify-center items-center mt-[15px]'>
    <button type="submit">
    <PlusIcon/>
    </button>
   </div>
   </>
  )
}

export default Card
