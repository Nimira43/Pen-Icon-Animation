import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h4>Register</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-input'
            defaultValue='Name'
            required
          />
        </div>
        <button type='submit' className='btn btn-block'>Submit</button>
        <p>
          Already signed up?
          <Link to='/login' className='btn btn-outline'>Login</Link>
        </p>
      </form>
    </Wrapper>
    )
}













export default Register

// import Logo  from '../components/Logo'
// import FormRow from '../components/FormRow'
// import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
// import { Link } from 'react-router-dom'

// const Register = () => {
//   return (
//     <Wrapper>
//       <form className='form'>
//         <Logo />
//         <h4>Register</h4>
//         <FormRow type='text' name='name' />
//         <FormRow type='text' name='lastName' labelText='last name' />
//         <FormRow type='text' name='location' />
//         <FormRow type='email' name='email' />

//         <FormRow type='password' name='password' />
//         <button type='submit' className='btn btn-block'>
//           Submit
//         </button>
//         <p>
//           Already a member?
//           <Link to='/login' className='member-btn'>
//             Login
//           </Link>
//         </p>
//       </form>
//     </Wrapper>
//   )
// }
// export default Register
