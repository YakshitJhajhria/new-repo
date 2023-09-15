import Image from 'next/image'
import { Inter } from 'next/font/google'
import Profile from '@/components/profile/Profile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Profile/>
   </>
  )
}
