import Wrapper from '../assets/wrappers/Navbar'
import { AiOutlineHome } from 'react-icons/ai'
import { LiaAlignCenterSolid } from 'react-icons/lia'
import Logo from './Logo'
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn'>
          <LiaAlignCenterSolid className=' ' />
        </button>
        <div>
          <Logo />
          <h4>Dashboard</h4>
        </div>
        <div className="btn-container">Toggle / Logout</div>
      </div>
    </Wrapper>
  )
}

export default Navbar

