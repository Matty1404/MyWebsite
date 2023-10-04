'use client'
export default function NavBar() { 
  function scrollToTarget(target: string) {
    const targetDiv = document.getElementById(target);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const ListElem = ({ title, target } : {title: string, target : string}) => {
    return (
      <li onClick={() => scrollToTarget(target)} className='transform transition-transform duration-500 ease-in-out hover:scale-110 hover:cursor-pointer'>{title}</li>
    )
  }
  return (
    <nav className='h-[5rem] bg-gradient-to-r from-black to-gray-700 text-red-600 sticky top-0 z-[200]'>
      <div className='flex flex-row justify-between h-full'>
        <div className='p-5 flex justify-center items-center text-3xl'>
          Matthew&apos;s Portfolio
        </div>
        <div className='p-5 h-full text-xl mx-5 items-center justify-center'>
          <ul className='flex flex-row gap-10'>
            <ListElem title='About Me' target='AboutMe'/>
            <ListElem title='Projects' target='MyProjects'/>
            <ListElem title='Achievements' target='MyAchievements'/>
            <ListElem title='Experiences' target='MyExperiences'/>
            <ListElem title='Education' target='MyEducation'/>
          </ul>
        </div>
      </div>
    </nav>
  )
}