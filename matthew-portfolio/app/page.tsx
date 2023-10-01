'use client'

import AboutMe from '@/components/aboutme'
import MyProjects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <AboutMe/>
      <MyProjects/>
    </div>
  )
}
