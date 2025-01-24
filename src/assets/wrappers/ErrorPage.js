import styled from 'styled-components'

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: var(--rem-2);
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: var(--size-8);
  }
  p {
    line-height: 1.5;
    margin-top: var(--size-8);
    margin-bottom: var(--rem-1);
    color: var(--dark);
  }
  a {
    color: var(--primary-dark);
    text-transform: uppercase;
  }
`;

export default Wrapper
