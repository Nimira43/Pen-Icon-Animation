import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='name' />
        <FormRow type='text' name='lastName' labelText='last name' defaultValue='surname' />
        <FormRow type='text' name='location' defaultValue='place name' />
        <FormRow type='email' name='email' defaultValue='name@name.com' />
        <FormRow type='password' name='password' defaultValue='password' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register