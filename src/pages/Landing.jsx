import landing from '../assets/images/landing.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .logo {
    margin-top: var(--rem-2);
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: var(--rem-2);
  }

  h1 {
    font-weight: 400;
    span {
      color: var(--primary-dark);
    }
    margin-bottom: var(--rem-1-5);
  }

  p {
    line-height: 1.5;
    color: var(--dark);
    margin-top: var(--rem-1-5);
    margin-bottom: var(--rem-1-5);
    max-width: 35em;
  }

  .register-link {
    margin-right: var(--rem-1);
  }

  .main-img {
    display: none;
  }

  .btn {
    padding: var(--size-12) var(--rem-1);
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default Landing
