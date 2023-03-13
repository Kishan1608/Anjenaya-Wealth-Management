import React from 'react'
import "./Footer.css"
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <h2 className='logo'>Anjenaya Wealth Management</h2>
      </div>
      <div className="socials">
        <a href='https://instagram.com/anjenaya_wealth?igshid=YmMyMTA2M2Y=' target={'_blank'} rel='noreferrer'><BsFacebook /></a>
        <a href='https://instagram.com/anjenaya_wealth?igshid=YmMyMTA2M2Y=' target={'_blank'} rel='noreferrer'><BsInstagram /></a>
        <a href='https://instagram.com/anjenaya_wealth?igshid=YmMyMTA2M2Y=' target={'_blank'} rel='noreferrer'><BsTwitter /></a>
      </div>
      <div className="copyright">
        &#169; Anjenaya Wealth Management | Website designed by <a href='https://www.linkedin.com/in/kishan-chauhan-a7420a212/' target={'_blank'} rel='noreferrer'>Kishan Chauhan</a>
      </div>
    </div>
  )
}

export default Footer