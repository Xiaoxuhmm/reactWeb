import React from 'react'
import {Media} from 'react-bootstrap'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  media:{
    marginTop: '5%',
    paddingLeft: '2%', paddingTop: '3%', paddingBottom: '3%'
  },
  img: {
    borderRadius: '8%'
  },
  mediaBody: {
    paddingLeft: '7%',
  },
  heading: {
    textAlign:'left', fontFamily:"'Raleway', sans-serif", color:'#37c',
     ':hover' : {color: '#0083ff'}, marginTop: '0'
  },
  headingHover: {

  },
  subtitle: {
    color: '#5ac974',
    textAlign:'left',
  },
  content: {
    textAlign:'left',
    fontSize: '17px',
    color:'#616161',
    fontFamily: 'Lora'
  },
  p: {
    marginTop: '5px'
  }
})

// <Media.Heading className = {css(styles.heading)}>{heading}</Media.Heading>

const PanelItem = ({img, heading, subtitle, content}) => {
  return (
    <Media className = {css(styles.media)}>
      <Media.Left>
        <img width={200} height={200} src={img} className={css(styles.img)} alt="Image" />
      </Media.Left>
      <Media.Body className = {css(styles.mediaBody)}>
        <h3 className = {css(styles.heading)}>{heading}</h3>
        <div className={css(styles.subtitle)}>
          <h4>{subtitle}</h4>
        </div>
        <div className={css(styles.content)}>
          <p className={css(styles.p)}>
            {content}
          </p>
        </div>
      </Media.Body>
    </Media>
  )
}

export default PanelItem
