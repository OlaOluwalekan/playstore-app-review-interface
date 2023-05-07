import { FaWhatsappSquare } from 'react-icons/fa'

const Application = () => {
  return (
    <div className='application'>
      <span className='logo'>
        <FaWhatsappSquare />
      </span>
      <article className='info'>
        <h3 className='name'>WhatsApp</h3>
        <p className='company'>WhatsApp LLC</p>
        <p className='others'>In-app purchase</p>
      </article>
    </div>
  )
}
export default Application
