import React from 'react'
import {ListGroup, ListGroupItem, Grid, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Huangshan1 from '../imgs/huangshan1.jpg'
import {StyleSheet, css} from 'aphrodite'

const listGroupItemStyle = {fontFamily: "'Lora', sans-serif", fontSize:'20px', }
                            // backgroundColor: '#d3d3d3'}

const styles = StyleSheet.create({
  ListGroup: {
    border:'1px solid #222222', height:'100vh',
    marginBottom: '0'
  },
  ListGroupItem: {
    fontFamily: "'Lora', sans-serif",
    fontSize: '20px',
  },
  Link: {
    color: 'black',
    textDecoration: 'none'
  }
})

// the way to use background image: backgroundImage:`url(${Huangshan1})`, backgroundSize:'cover'}}

const GuideLeft = () => {
  return (
    <ListGroup
      className = {css(styles.ListGroup)} >
      <ListGroupItem key="aboutme" className={css(styles.ListGroupItem)}>
        <Link className={css(styles.Link)} to='/'>About Me</Link>
      </ListGroupItem>
      <ListGroupItem key='projects' className={css(styles.ListGroupItem)}>
        <Link className={css(styles.Link)} to='/projects'>Projects</Link>
      </ListGroupItem>
      <ListGroupItem key='photos' className={css(styles.ListGroupItem)}>Photos</ListGroupItem>
    </ListGroup>
  )
}

export default GuideLeft
