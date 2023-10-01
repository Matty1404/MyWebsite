'use client'

import ParallaxWindow from '@/components/ParallaxWindow'
import AboutMe from '@/components/aboutme'
import MyAchievements from '@/components/achievements'
import MyProjects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col gap-16 h-[300rem]'>
      {/* <AboutMe />
      <MyProjects /> */}
      <MyAchievements />
    </div>
  )
}
