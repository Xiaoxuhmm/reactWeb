import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from  'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaInstagram from 'react-icons/lib/fa/instagram';
import ManhattanLight from '../imgs/ManhattanLight.jpg'
import '../styles/header.css';
import {StyleSheet, css} from 'aphrodite'
import {Link} from 'react-router-dom'

const styles = StyleSheet.create({
  navbar:{
    marginBottom:'0px'
  },
  navRight: {
    marginRight: '0', backgroundColor: '#222222', marginBottom: '0'
  },
  navLeft: {
    margin:'auto',
  },
  navItem:{
    margin: 'auto'
  },
  navItemLeftLink: {
    fontFamily:"'Zilla Slab', sans-serif",
    color: 'white',
    textDecoration: 'none',
    fontSize: '25px'
  }
})

const Header = () => {
  const title='I\'m Xiaoxu Li'
  return(
    <Navbar inverse collapseOnSelect className={css(styles.nav)}>
      <Nav pullLeft className={css(styles.navLeft)}>
        <NavItem className={css(styles.navItem)}>
          <p className={css(styles.navItemLeftLink)}>{title}</p>
        </NavItem>
      </Nav>
      <Navbar.Collapse>
        <Nav className='nav' pullRight>
          <NavItem key='email' className='icon-wrapper first-icon-wrapper'href="mailto:xl1842@nyu.edu">
            <FaEnvelope className="icons" />
          </NavItem>
          <NavItem key='github' className="icon-wrapper" href="https://github.com/Xiaoxuhmm">
            <FaGithub className="icons"/>
          </NavItem>
          <NavItem key='linkedin' className="icon-wrapper" href="https://www.linkedin.com/in/xiaoxu-li/">
            <FaLinkedIn className="icons"/>
          </NavItem>
          <NavItem key='instagram' className="icon-wrapper" href="https://www.instagram.com/allen_lixiaoxu/">
            <FaInstagram className="icons" />
          </NavItem>
          <NavItem key='photo'>
            <img src={ManhattanLight}  style={{width: '35px', height: '35px'}} />
          </NavItem>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default Header
