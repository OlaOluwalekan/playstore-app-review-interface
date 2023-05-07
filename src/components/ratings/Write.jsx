import { useState } from 'react'
import WriteStar from './WriteStar'

const Write = ({
  postReview,
  newReview,
  setNewReview,
  writeIsOpen,
  setWriteIsOpen,
  editMode,
  chooseStar,
  rating,
}) => {
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewReview({ ...newReview, [name]: value })
  }

  // const clicked = (n) => {
  //   console.log(n)
  // }

  return (
    <div className='write-a-review'>
      <article className={writeIsOpen ? 'open-write' : ''}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          value={newReview.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='image'
          id='image'
          placeholder='Image URL'
          value={newReview.image}
          onChange={handleChange}
        />

        <article>
          {[1, 2, 3, 4, 5].map((n) => {
            return (
              <WriteStar
                key={n}
                value={n}
                chooseStar={() => chooseStar(n)}
                rating={rating}
              />
            )
          })}
        </article>
        <textarea
          name='review'
          id='review'
          cols='30'
          rows='10'
          placeholder='Write Your Review'
          value={newReview.review}
          onChange={handleChange}
        ></textarea>
      </article>
      <div>
        <button onClick={postReview}>
          {writeIsOpen
            ? editMode
              ? 'Update Your Review'
              : 'Send Your Review'
            : 'Write a Review'}
        </button>
        {writeIsOpen && (
          <button
            className='cancel-write'
            onClick={() => setWriteIsOpen(false)}
          >
            Cancel Review
          </button>
        )}
      </div>
    </div>
  )
}
export default Write
