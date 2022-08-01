import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from  "@material-ui/icons/Email";
import "../styles/Footer.css";




function Footer() {
  return (
    <div className="footer">
    <div>
      <h6>Social Media Contacts</h6>
      <ul className='contactdetails'>
        <li>www.github.com/ogahcletus</li>
        <li>www.linkedin.com/in/cletus-ogah-10a680b4/</li>
        <li>ogahcletus@gmail.com</li>
      </ul>
    </div>
        <div className="socialMedia">
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
            
        </div>
        <p>&copy; Cletus_Ogah @2022</p>
    </div>
  )
}

export default Footer