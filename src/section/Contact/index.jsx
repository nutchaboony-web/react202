import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return(
        <div className='flex items-end gap-4 text-2xl'>
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faSquareInstagram} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faYoutube} />
              <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGit} />
            </div>
    )
}
export default Contact