import styled from 'styled-components'

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    padding: var(--size-20);
    max-width: 400px;
    border-top: var(--size-5) solid var(--light);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: var(--rem-1);
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: var(--rem-1);
  }
`;
export default Wrapper
