import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from  'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaInstagram from 'react-icons/lib/fa/instagram';
import '../styles/footer.css';

const Footer = () => {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav class='nav'>
          <NavItem className='icon-wrapper first-icon-wrapper'href="mailto:xl1842@nyu.edu">
            <FaEnvelope className="icons" />
          </NavItem>
          <NavItem className="icon-wrapper" href="https://github.com/Xiaoxuhmm">
            <FaGithub className="icons"/>
          </NavItem>
          <NavItem className="icon-wrapper" href="https://www.linkedin.com/in/xiaoxu-li/">
            <FaLinkedIn className="icons"/>
          </NavItem>
          <NavItem className="icon-wrapper" href="https://www.instagram.com/allen_lixiaoxu/">
            <FaInstagram className="icons" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// Notice: Icons should be used in <a> or any text form.


// <NavItem eventkey='FaGithub' href="https://github.com/Xiaoxuhmm">
//     <FaGithub className="icons"/>
// </NavItem>
// <NavItem eventkey='FaLinkedIn' href='https://www.linkedin.com/in/xiaoxu-li/'>
//     <FaLinkedIn className="icons"/>
// </NavItem>

export default Footer;
