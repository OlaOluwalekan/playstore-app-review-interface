import { FaStar } from 'react-icons/fa'

const WriteStar = ({ value, chooseStar, rating }) => {
  return (
    <span
      className='star'
      onClick={chooseStar}
      style={{ color: `${value <= rating ? 'green' : 'gray'}` }}
    >
      <FaStar />
    </span>
  )
}
export default WriteStar
