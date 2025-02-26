import React from 'react'
import { useLocation } from 'react-router'

const About = () => {
    const location =useLocation();
    const data=location.state;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <h2>About Page</h2>
        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", width: "300px", textAlign: "left" }}>
        <p>Name:{data?.name}</p><br></br>
        <p>Email:{data?.email}</p><br></br>
        <p>Phone Number:{data?.phoneNumber}</p><br></br>
        <p>Employment  Status:{data?.employmentStatus ?"Yes":"No"}</p>
        </div>
    </div>
  )
}

export default About