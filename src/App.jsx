import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-solid-svg-icons'
import { faGit } from '@fortawesome/free-solid-svg-icons'
import fileResume from './assets/COM-SCI2565.pdf'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_40%_25%] h-[90vh]'>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle'>Nutcha Boonyakama</div>
            <div className='text-primaryAccent font-semibold'>Computer Science</div>
            <div className='text-sm w-5/6'>I build accessible, pixel-perfect digital experiences for the web.</div>
            <div className='mt-4'>
              <a href={fileResume} target='_blank'>
                <span className='rounded-md bg-primaryTitle text-white py-2 px-4'>
                  View Resume
                  <span className='rotate-90 inline-block ml-2 text-sm'>
                    <FontAwesomeIcon className='animate-bounce' icon={faArrowsDownToLine} />
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-4 font-semibold'>
            <div>
              <FontAwesomeIcon className='mr-2'icon={faArrowRight}/>
              About
              </div>
            <div>Experience</div>
            <div>Projects</div>
            <div>Article</div>
          </div>
            <div className='flex items-end gap-4 text-2xl'>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faSquareInstagram} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faYoutube} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGit} />
            </div>
          </div>
        </div>
      <div>
        <div>About</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
      </div>
    </div>
  )
}

export default App
