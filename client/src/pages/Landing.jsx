// import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main-5.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            find<span> your</span> future
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            eligendi neque quidem. Repellendus neque esse dolorum ad,
            dignissimos similique facilis quaerat dolor, accusantium eius alias
            soluta, quae qui tempore porro.
          </p>
          <Link to='/register' className='btn register-link'>Register</Link>
          <Link to='/login' className='btn'>Login / Demo User</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
      </div>
    </Wrapper>
  );  
}

export default Landing
