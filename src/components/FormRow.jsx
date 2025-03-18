const FormRow = ({ 
  type,
  name,
  labelText,
  defaultValue

}) => {
  return (
    <div className='form-row'>
      <label
        htmlFor={name}
        className='form-label'
      >
        
      </label>
      <input
        type='text'
        id='name'
        name='name'
        className='form-input'
        defaultValue='Name'
        required
      />
    </div>
  )
}

export default FormRow

