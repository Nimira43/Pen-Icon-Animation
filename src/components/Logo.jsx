import Logo  from '../components/Logo'
import FormRow from '../components/FormRow'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' defaultValue='user@email.com' />
        <FormRow type='password' name='password' defaultValue='Password' />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <button type='button' className='btn btn-block'>
          Explore the App
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Login