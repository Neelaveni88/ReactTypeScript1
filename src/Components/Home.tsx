import React, { useState } from 'react'
import { useNavigate } from 'react-router';

interface FormData {
 name:string;
 email:string;
 phoneNumber:number;
 employmentStatus:boolean;
}

const Home = () => {
    const [formData, setFormData] = useState<FormData>({name:'',email:'',phoneNumber:0,employmentStatus:false});
    const navigate = useNavigate();

    const handleChange =(e:React.ChangeEvent<HTMLInputElement| HTMLSelectElement>)=>{
        const{name,value} =e.target;
    setFormData({
        ...formData,[name]:name==='phoneNumber'?Number(value):name==="employmentStatus"?value==='Yes':value,
    });
};
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        navigate("/About",{state:formData});
    }
  return (
    <div >
        <h2>Home</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",border:"2px solid red",width:"360px",marginLeft:"38%",marginTop:"30px",padding:"30px",backgroundColor:"grey" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px",padding:"10px" }}>
             <input style={{padding:"10px",borderRadius:"5px"}}type='text' name='name' placeholder='Enter Your Name' onChange={handleChange} required/><br></br>
            <input style={{padding:"10px",borderRadius:"5px"}}type='email' name='Email' placeholder='Enter Your Email id' onChange={handleChange} required/><br></br>
            <input style={{padding:"10px",borderRadius:"5px"}}type='number' name='phoneNumber' placeholder='Enter Your Phone Number' onChange={handleChange} required/><br></br>
            <select  style={{padding:"10px",borderRadius:"5px"}} name='employmentStatus' onChange={handleChange} required>
                <option value="">Select Employment Status </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option> 
            </select><br></br>
            <button style={{color:"white",backgroundColor:"blue",padding:"10px",borderRadius:"5px"}}type='submit'>Submit</button>

        </form>
        </div>
    </div>
  )
}

export default Home


