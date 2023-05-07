import { FaEllipsisV, FaPen, FaTrash } from 'react-icons/fa'
import { months } from '../../ratings'
import { useRef, useState } from 'react'
import Stars from './Stars'

const Rating = ({
  id,
  image,
  name,
  rating,
  date,
  review,
  showPopUp,
  getId,
}) => {
  return (
    <section>
      <div className='reviewer-info'>
        <article className='image-and-name'>
          <article>
            {image ? (
              <img src={image} alt={`${name}'s photo`} />
            ) : (
              <h2>{name.charAt(0).toUpperCase()}</h2>
            )}
          </article>
          <p className='name'>{name}</p>
        </article>
        <span
          className='ellipses'
          onClick={(e) => {
            showPopUp(e)
            getId(id)
          }}
        >
          <FaEllipsisV className='hello' />
        </span>
      </div>

      <div className='rating-and-date'>
        <article>
          <Stars rating={rating} />
        </article>
        <p>{`${months[new Date(date).getMonth()]} ${new Date(
          date
        ).getDate()}, ${new Date(date).getFullYear()}`}</p>
      </div>
      <div className='reviewer-review'>
        <p>{review}</p>
      </div>
    </section>
  )
}
export default Rating
