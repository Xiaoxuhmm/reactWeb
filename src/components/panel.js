import React from 'react'
import {ListGroup, ListGroupItem, Grid, Col} from 'react-bootstrap'
import GuideLeft from './guideLeft'
import PanelRight from './panelRight'
import {Route} from 'react-router-dom'
import CSU from '../imgs/centralSouthUni.jpg'
import Sydney from '../imgs/Sydney.jpg'
import NYU from '../imgs/nyu1.jpg'
import ML from '../imgs/ML.jpg'
import EW from '../imgs/ew1.jpg'
import ReactImg from '../imgs/react.jpg'
import BoutiqueDirectory from '../imgs/BoutiqueDirectory.png'
import {StyleSheet, css} from 'aphrodite'

const aboutMePanelData = [
  {img:NYU, heading: 'New York University', subtitle:'2016 - 2018'},
  {img:Sydney, heading: 'Australia Work And Holidy', subtitle:'2015 - 2016'},
  {img:CSU, heading: 'Cental South University', subtitle:'2011 - 2015'}
]

const projectPanelData = [
  {img: ReactImg, heading: 'Website Front-end Migration', subtitle: 'Feb.2018 - Present',
    content: 'We start to migrate our frontend code into react.js because of the increase of '+
    'our frontend code size and trying to merge code from different teams. MVVM design '+
    'pattern is applied.'},
  {img: EW, heading: 'Size Converter', subtitle: 'Oct. 2017 - Feb. 2018',
    content:'My team built a size converter for different brands to beneift the users '
    +'users\'s experience. This project start from raw data cleaning using python '
    +'to node.js backend implementation and frontend development using HTML, CSS and jQuery'},
  {img: BoutiqueDirectory, heading: 'Boutique Directory', subtitle: 'Nov. 2017 - Feb. 2018',
    content: 'This project aimed at building a directory for users to find their loved clothes '+
    'in the nearest boutique and showed the position in Map. Data are stored in Mongodb, and '+
    'business logic is implemented using node.js, frontend is built using jQuery with Google Map API'},
  {img: ML, heading: 'News Classification', subtitle: 'Nov. 2017 - Jan. 2018',
    content:"My team implement a whole process of news classification. "
    + " Python web-crawler was applied for data collection. 6500 pieces of news "
    + "are fetched from Mashable and stored in Mongodb. Data cleaning and tokenization are applied. "
    + "Then multiple machine learning model were trained. The runing time and the accuracy "
    + "for each model was recorded to find the model with best performance. API was designed to classify "
    + "news",}
]

const styles = StyleSheet.create({
  gridContainer:{
    width:'100%',
    height:'100%'
  },
  background:{
    backgroundColor:'#f2f2f2',
  },
  grid: {
    margin: 'auto',
    width:'70%',
  },
  rightPanel: {
    height: '100%',
    paddingLeft: '0',
    paddingRight:'0',
    margin:'auto'
  }
})

//In react-router v4 the props are passed by render a function

// <Col lg={2} md={3} sm={3} xs={3} style={{margin: '0', padding:'0' }}>
//   <GuideLeft />
// </Col>

// <Route exact path='/'
//   render={() => <PanelRight panelRightData={aboutMePanelData}/>} />

const Panel = () => {
  return (
    <div>
      <div className={css(styles.gridContainer, styles.background)}>
        <Grid className={css(styles.grid)}>
          <Col lg={12} md={12} sm={12} xs={12} className = {css(styles.rightPanel)}>
            <PanelRight panelRightData={aboutMePanelData}/>
          </Col>
        </Grid>
      </div>
      <div className={css(styles.gridContainer)}>
        <Grid className={css(styles.grid)}>
          <Col lg={12} md={12} sm={12} xs={12} className = {css(styles.rightPanel)}>
            <PanelRight panelRightData={projectPanelData}/>
          </Col>
        </Grid>
      </div>
    </div>
  )
}

export default Panel
