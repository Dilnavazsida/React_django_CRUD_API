import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
          
  const [name,setname] = useState({})

  function handleChange(e){
    setname({...name,[e.target.name]:e.target.value})
  }
  async function submitData() {
    await fetch(
      "http://127.0.0.1:8000/save/",{
        method:"POST",
        body:JSON.stringify(name),
        headers:{
          "Content-Type":"application/json",
        },
      }).then((response)=>{
        return response.json()
      }).then((rData)=>{
        console.log("success",rData)
      }).catch((error)=>{
        console.log("error",error)
      });
  };
  return (
    <>
      
<div className="container mt-5">
  <h2 className="mb-4">User Information Form</h2>
  <form >
    <div className="mb-3">
      <label  className="form-label">Name</label>
      <input type="text" id="name" name="name" className="form-control" placeholder="Enter your full name" required  onChange={(e)=>{handleChange(e)}}/>
    </div>

    <div className="mb-3">
      <label className="form-label">City</label>
      <input type="text" id="city" name="city" className="form-control" placeholder="Enter your city" required onChange={(e)=>{handleChange(e)}}/>
    </div>

    <div className="mb-3">
      <label  className="form-label">Age</label>
      <input type="number" id="age" name="age" className="form-control" placeholder="Enter your age" min="1" max="120" required onChange={(e)=>{handleChange(e)}}/>
    </div>

    <div className="mb-3">
      <label className="form-label">Mobile</label>
      <input type="tel" id="mobile" name="mobile" className="form-control" placeholder="Enter 10-digit mobile number" pattern="[0-9]{10}" required onChange={(e)=>{handleChange(e)}}/>
      <div className="form-text">Format: 10 digits only</div>
    </div>

    <button type="submit" className="btn btn-primary" onClick={(e)=>
                                                      {e.preventDefault();
                                                      submitData()
                                                      }}>
                                                        Submit
                                                      </button>
  </form>
</div>
 </>
  )
}

export default App


