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
        <p>
          Not signed up?
          <Link to='/register' className='link'>Register</Link>
        </p>
      </form>
    </Wrapper>
  )
}






export default Login

// import Logo  from '../components/Logo'
// import FormRow  from '../components/FormRow'
// import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//     <Wrapper>
//       <form className='form'>
//         <Logo />
//         <h4>Login</h4>
//         <FormRow type='email' name='email' defaultValue='john@gmail.com' />
//         <FormRow type='password' name='password' defaultValue='secret123' />
//         <button type='submit' className='btn btn-block'>
//           submit
//         </button>
//         <button type='button' className='btn btn-block'>
//           explore the app
//         </button>
//         <p>
//           Not a member yet?
//           <Link to='/register' className='member-btn'>
//             Register
//           </Link>
//         </p>
//       </form>
//     </Wrapper>
//   )
// }

// export default Login;

