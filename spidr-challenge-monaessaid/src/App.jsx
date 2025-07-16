import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    cost: '',
    pin: '',
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <div className="container">
      <h1>Spidr Fryer Form
      </h1>
      <form onSubmit={handleSubmit}>

        {/* First Name */}
        <label htmlFor="firstname">First Name</label>
        <input type="text" pattern="[A-Za-z]{1,32}" placeholder="Enter First Name" name="firstname" 
        onChange={(e) => handleChanges(e)} required/>

        {/* Last Name */}
        <label htmlFor="lastname">Last Name</label>
        <input type="text" pattern="[A-Za-z]{1,32}" placeholder="Enter Last Name" name="lastname" 
        onChange={(e) => handleChanges(e)} required/>

        {/* Phone - needs additional formatting through JS?*/}
        <label htmlFor="phone">US Phone</label>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="XXX-XXX-XXXX" name="phone" 
        onChange={(e) => handleChanges(e)} required/>

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" name="email"
        onChange={(e) => handleChanges(e)} required/>

        {/* Cost - needs additional formatting through JS*/}
        <label htmlFor="cost">Cost</label>
        <input type="text" data-type="currency" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" placeholder="$50.00" name="cost"
        onChange={(e) => handleChanges(e)} required/>

        {/* Spidr Pin */}
        <label htmlFor="pin">Spidr Pin</label>
        <input type="text" data-type="pin" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder="####-####-####-####" name="pin"
        onChange={(e) => handleChanges(e)} required/>

        {/* Submit Button */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
