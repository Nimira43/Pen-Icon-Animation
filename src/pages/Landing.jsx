import landing from '../assets/images/landing.svg'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h4>
            Find Your Dream Job
          </h4>
          <p>
            Discover your next career move. Explore a wide range of job vacancies, apply effortlessly, and find the perfect opportunity that matches your skills and aspirations. Start your job hunt today.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div>
        <img src={landing} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
