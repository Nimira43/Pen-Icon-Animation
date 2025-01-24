import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h1 className='logo'>Worksearch</h1>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Find Your Dream Job</h1>
          <p>Discover countless opportunities and connect with employers worldwide. Our platform makes job searching simple and effective, empowering you to take the next step in your career journey.</p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>  
          <Link to='/login' className='btn'>
            Login
          </Link>  
        </div>
        <img 
      </div>
    </Wrapper>
  )
}

export default Landing
