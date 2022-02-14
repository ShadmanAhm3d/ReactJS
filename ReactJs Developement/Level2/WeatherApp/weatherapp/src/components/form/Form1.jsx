import React from 'react'

const Form1 = ({setInputvalue ,onchangeinput, inputvalue,onsubmithandler}) => {
  return (
    <div className="form">
    <form onSubmit={onsubmithandler}>
      <input type="text" className="forminput" value={inputvalue} onChange={onchangeinput} />
      <button className="formbutton" type="submit">Search</button>
    </form>
    </div>
  )
}

export default Form1