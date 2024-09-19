import React, { useState } from 'react'

export default function Registration() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [setErrorMessage, errorMessage] = useState()

  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handleName(e){
    setName(e.target.value)
  }
  function handlePassword(e){
    setPassword(e.target.value)
  }
  function handleSubmit(){
    if(email === '') 
    if(name === '')
    if(password === '')
  }
 
  return (
    <form>
        <label>Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail}/>

        <label>Login:</label>
        <input type="text" value={name} onChange={handleName}/>

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePassword}/>

        <button className="btn" onClick={handleSubmit} type="submit">
          Submit
        </button>
    </form>
  )
}
