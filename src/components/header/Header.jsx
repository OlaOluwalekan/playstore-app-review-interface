import Menu from './Menu'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <img
        src='https://th.bing.com/th/id/R.bb8297390fbb6680f07c462cf21e1b84?rik=KSZ5ynUcbs75ew&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgoogle-play-icon-transparent%2fgoogle-play-icon-transparent-2.png&ehk=hcxmqSmrVyswmtYFhJupryfqjm4YNOzn6G8qPmp8Ou8%3d&risl=&pid=ImgRaw&r=0'
        alt='Logo'
        className='logo'
      />
      <Menu />
    </div>
  )
}
export default Header
