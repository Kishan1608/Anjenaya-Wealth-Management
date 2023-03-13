import React from 'react'
import "./Footer.css"
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <h2 className='logo'><a href='#'>Anjenaya Wealth Management</a></h2>
      </div>
      <div className="socials">
        <a href='#'><BsFacebook /></a>
        <a href='https://instagram.com/anjenaya_wealth?igshid=YmMyMTA2M2Y=' target={'_blank'}><BsInstagram /></a>
        <a href='#'><BsTwitter /></a>
      </div>
      <div className="copyright">
        &#169; Anjenaya Wealth Management | Website designed by <a href='https://www.linkedin.com/in/kishan-chauhan-a7420a212/' target='_blank'>Kishan Chauhan</a>
      </div>
    </div>
  )
}

export default Footer