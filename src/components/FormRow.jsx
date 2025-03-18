const FormRow = () => {
  return (
    <div className='form-row'>
      <label htmlFor='name' className='form-label'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        className='form-input'
        placeholder='Name'
        required
      />
    </div>
  )
}

export default FormRow

