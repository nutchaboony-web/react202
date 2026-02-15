import fileResume from '../../assets/COM-SCI2565.pdf'
import { faArrowRight,faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
    return (
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
    )
}
export default Header