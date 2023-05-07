import { FaInfoCircle, FaPen, FaTrash } from 'react-icons/fa'
import { reviews } from '../../ratings'
import { useEffect, useRef, useState } from 'react'
import Rating from './Rating'
import './rating.css'
import Write from './Write'

// window.onload = () => {
//   localStorage.setItem('reviews', JSON.stringify(reviews))
// }
let res = JSON.parse(localStorage.getItem('reviews')) || reviews
// console.log(res)

const Ratings = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('reviews')) || reviews
  )

  const [writeIsOpen, setWriteIsOpen] = useState(false)
  const [newReview, setNewReview] = useState({
    id: '',
    date: '',
    name: '',
    image: '',
    rating: 1,
    review: '',
  })
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState(0)
  const popRef = useRef(null)
  const testRef = useRef(null)
  const [position, setPosition] = useState(0)

  window.onscroll = () => {
    let pos = testRef.current.getBoundingClientRect().y
    setPosition(pos)
    // console.log(position, window.innerHeight)
  }

  const getId = (i) => {
    setId(i)
  }

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(data))
  }, [data])

  const showPopUp = (e) => {
    // popRef.current.style.display = 'none'
    const pos = e.target.getBoundingClientRect().y
    const ans = pos - position
    // console.log(pos, position, ans)
    if (popRef.current.style.display === 'none') {
      popRef.current.style.display = 'flex'
      popRef.current.style.top = `${pos - position + 20}px`
    } else {
      popRef.current.style.display = 'none'
    }
  }

  const postReview = () => {
    if (writeIsOpen) {
      if (!editMode) {
        console.log('add')
        const newNewReview = {
          ...newReview,
          id: new Date().getTime().toString(),
          date: new Date(),
        }
        setData([...data, newNewReview])
      } else {
        const tobeUpdated = data.find((d) => {
          return d.id === id
        })
        data.splice(data.indexOf(tobeUpdated), 1, {
          ...newReview,
          date: new Date(),
        })
        // console.log(data)
        setEditMode(false)
      }
      setWriteIsOpen(false)
      setNewReview({
        name: '',
        image: '',
        rating: 1,
        review: '',
      })
    } else {
      setWriteIsOpen(true)
    }
  }

  const chooseStar = (n) => {
    setNewReview({ ...newReview, rating: n })
  }

  const handleDelete = (i) => {
    const newData = data.filter((d) => {
      return d.id !== i
    })
    setData(newData)
    popRef.current.style.display = 'none'
  }

  const toEdit = (i) => {
    const edit = data.find((d) => {
      return d.id === i
    })
    setNewReview(edit)
    setWriteIsOpen(true)
    setEditMode(true)
    popRef.current.style.display = 'none'
    window.scrollTo(0, 200)
  }

  return (
    <div className='ratings'>
      <h1 className='top' ref={testRef}>
        top
      </h1>
      <h3>Rate this app</h3>
      <p>Tell others what you think</p>
      <Write
        newReview={newReview}
        setNewReview={setNewReview}
        postReview={postReview}
        writeIsOpen={writeIsOpen}
        editMode={editMode}
        chooseStar={chooseStar}
        rating={newReview.rating}
        setWriteIsOpen={() => {
          setWriteIsOpen(false)
          setNewReview({
            name: '',
            image: '',
            rating: 1,
            review: '',
          })
        }}
      />
      <h3>Ratings and reviews</h3>
      <p>
        Ratings and reviews are verified{' '}
        <span>
          <FaInfoCircle />
        </span>
      </p>
      <section>
        <article className='pop-up' ref={popRef} style={{ display: 'none' }}>
          <span onClick={() => toEdit(id)}>
            <FaPen /> Edit
          </span>
          <span onClick={() => handleDelete(id)}>
            <FaTrash /> Delete
          </span>
        </article>
        {data.map((item) => {
          return (
            <Rating
              key={item.id}
              {...item}
              showPopUp={showPopUp}
              getId={getId}
            />
          )
        })}
      </section>
    </div>
  )
}
export default Ratings
