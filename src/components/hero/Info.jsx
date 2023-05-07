import { FaInfoCircle, FaStar } from 'react-icons/fa'

const Info = () => {
  return (
    <div className='info'>
      <section className='rating'>
        <article>
          4.2
          <span>
            <FaStar />
          </span>
        </article>
        <p>11M reviews</p>
      </section>

      <section className='downloads'>
        <p className='numbers'>500M+</p>
        <p>Downloads</p>
      </section>

      <section className='rated'>
        <article>
          <span>3</span>+
        </article>
        <p>
          Rated for 3+ <FaInfoCircle />
        </p>
      </section>
    </div>
  )
}
export default Info
