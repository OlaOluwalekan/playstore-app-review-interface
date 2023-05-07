import { useRef } from 'react'
import { FaSearch, FaUserAlt, FaQuestionCircle } from 'react-icons/fa'

const Menu = () => {
  return (
    <div>
      <span className='search'>
        <FaSearch />
      </span>
      <span className='help'>
        <FaQuestionCircle />
      </span>
      <span className='user'>
        <FaUserAlt />
      </span>
    </div>
  )
}
export default Menu
