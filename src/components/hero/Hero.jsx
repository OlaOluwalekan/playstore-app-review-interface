import Application from './Application'
import Info from './Info'
import InstallBtn from './InstallBtn'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Application />
      <Info />
      <InstallBtn />
    </div>
  )
}
export default Hero
