import { FaStar } from 'react-icons/fa'

const Stars = ({ rating }) => {
  return (
    <div>
      <span
        className='star1'
        style={{ color: `${rating >= 1 ? 'green' : 'gray'}` }}
      >
        <FaStar />
      </span>
      <span
        className='star1'
        style={{ color: `${rating >= 2 ? 'green' : 'gray'}` }}
      >
        <FaStar />
      </span>
      <span
        className='star1'
        style={{ color: `${rating >= 3 ? 'green' : 'gray'}` }}
      >
        <FaStar />
      </span>
      <span
        className='star1'
        style={{ color: `${rating >= 4 ? 'green' : 'gray'}` }}
      >
        <FaStar />
      </span>
      <span
        className='star1'
        style={{ color: `${rating >= 5 ? 'green' : 'gray'}` }}
      >
        <FaStar />
      </span>
    </div>
  )
}
export default Stars
