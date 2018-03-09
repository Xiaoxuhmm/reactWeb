import React from 'react';
import ProjectItem from './projectItem.js';
import mlImg from '../imgs/ml.png';
import StockImg from '../imgs/stock.png'
import StockAnalysisDemoContainer from '../containers/stockAnalysisDemoContainer';
import NewsClassificationDemoContainer from '../containers/newsClassificationDemoContainer'
import {Route} from 'react-router-dom'

const projectDataSet = [
  {
      img: mlImg,
      title:"News Classification",
      githubLink:"https://github.com/Xiaoxuhmm/ml_project",
      introduction:"In this project, we used data set from Online News Popularity Data Set."
      + "6500 pieces of news are fetched from Mashable using python web-crawler"
      + "and stored in Mongodb. Preprocessing was applied to this data set to get"
      + "tf-idf features and get the vectorized data. Multiple models were applied,"
      + "and the runing time and the accuracy for each model was recorded and"
      + "compared to get conclusion.",
      demoPath: '/newsClassificationDemo'
  },
  {img: StockImg,
    title: 'Stock Data Processing',
    githubLink: '#',
    introduction: 'In this project, stock data are fetched from Yahoo finance, and '
    + 'stored in Apache Cassandra. Then data are diplayed in front end using React '
    + 'and d3.',
    demoPath: '/stockAnalysisDemo'
  }
]

const ProjectComponent = () => {
  return(
    <div >
      <ProjectItem
        img={projectDataSet[0].img}
        title = {projectDataSet[0].title}
        githubLink = {projectDataSet[0].githubLink}
        introduction = {projectDataSet[0].introduction}
        demoPath = {projectDataSet[0].demoPath}
      />
      <Route path='/newsClassificationDemo' component={NewsClassificationDemoContainer} />
      <ProjectItem style={{marginTop: '3%'}}
        img={projectDataSet[1].img}
        title = {projectDataSet[1].title}
        githubLink = {projectDataSet[1].githubLink}
        introduction = {projectDataSet[1].introduction}
        demoPath = {projectDataSet[1].demoPath}
      />
      <Route path='/stockAnalysisDemo' component={StockAnalysisDemoContainer} />
    </div>
  )
}

export default ProjectComponent;
