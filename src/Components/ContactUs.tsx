import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div>
        <h3 style={{color:"green"}}>We want to hear from you!</h3>
        <p style={{textAlign:"center"}}>We take pride in our friendly customer care! If you take the time to reach out to us, we’ll help you in whatever way we can.</p>
    </div><br></br>
    <div className="grid1">
    <div className="image"><img src='https://www.thetoyshoponline.ie/wp-content/uploads/2018/06/sample-address.png'/> <address>ADDRESS:<br></br>2nd main street,Nammakal-607201</address></div>
    <div className="image"><img src='https://www.thetoyshoponline.ie/wp-content/uploads/2018/06/telephone-button.png'/> <address>TELEPHONE:<br></br>9876543090</address></div>
    <div className="image"><img src='https://www.thetoyshoponline.ie/wp-content/uploads/2018/06/email-button.png'/> <address>EMAIL:<br></br>Dojanatoy@gmail.com</address></div>
  </div>
  </>
  )
}

export default ContactUs