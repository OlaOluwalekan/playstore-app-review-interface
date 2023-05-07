import { FaDownload } from 'react-icons/fa'

const InstallBtn = () => {
  return (
    <div className='install'>
      <button>
        Install
        <span>
          <FaDownload />
        </span>
      </button>
    </div>
  )
}
export default InstallBtn
