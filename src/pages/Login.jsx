import { Link } from 'react-router-dom'
import  Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import FormRow from '../components/FormRow'
import Logo from '../components/Logo'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>Submit</button>
        <button type='button' className='btn btn-block'>Explore</button>
        <p>
          Not signed up?
          <Link to='/register' className='link'>Register</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login



