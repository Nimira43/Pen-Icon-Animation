import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h3>Find<span> Your</span> Destiny</h3>
          <p>Your dream job is just a click away! Discover thousands of opportunities, connect with top employers, and take the next step in your career journey. Empower your future with our intuitive job search platform.</p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;