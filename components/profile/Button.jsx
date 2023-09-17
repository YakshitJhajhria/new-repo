import React from 'react'
import Toggle from './Toggle'

const Button = () => {
  return (
    <div >
      <button type="submit" className='max-w-[341px] w-full h-[48px] flex justify-between items-center border bg-white rounded-[12px] border-springtimerain mx-auto p-3 text-black font-poppins text-[16px] font-medium leading-[24px]'>
        Log Out
        <Toggle/>
      </button>
    </div>
  )
}

export default Button
