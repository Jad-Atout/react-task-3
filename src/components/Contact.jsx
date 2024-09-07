import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });
    const [submittedData, setSubmittedData] = useState(false);

    const handleChange = (e) => {
        setFormInput({...formInputs,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      setSubmittedData(true);
      console.log(formInputs)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>User Name </label>
        <input type="text" value={formInputs.name} name={'name'} onChange={handleChange} />
  
        <label>Email </label>
        <input type="text" value={formInputs.email} name={'email'} onChange={handleChange} />
        <label>Age </label>
        <input type="text" value={formInputs.age} name={'age'} onChange={handleChange} />
  
        <hr />
        <button type='submit'>Submit</button>

        {submittedData?<div> name is {formInputs.name} email is {formInputs.email} age is {formInputs.age}
        </div>:false}
        
      </form>
    )
  }