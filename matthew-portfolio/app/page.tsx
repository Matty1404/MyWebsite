'use client'

import MyProjects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='h-[1000rem]'>
        <MyProjects/>
      </div>
    </div>
  )
}
