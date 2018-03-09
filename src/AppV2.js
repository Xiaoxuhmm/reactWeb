import React, {Component} from 'react'
import './App.css'
import Header from './components/header'
import Panel from './components/panel'
import Huangshan2 from './imgs/huangshan2.jpg'

class AppV2 extends Component{
  render() {
    const path = '/Demo'
    return (
      <div className="App">
          <Header />
          <Panel />
      </div>
    );
  }
}

export default AppV2;
