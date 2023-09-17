import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/profile/Button'
import Card from '@/components/manage-assests/Card'
import Manageassestsmain from '@/components/manage-assests/Manage-assests-main'
import Profilehover from '@/components/profile/Profile-hover'
import Toggle from '@/components/profile/Toggle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   {/* <Button/> */}
   {/* <Card/> */}
   {/* <Manageassestsmain/> */}
   <Profilehover/>
   {/* <Toggle/> */}
   {/* <Button/> */}
   </>
  )
}
