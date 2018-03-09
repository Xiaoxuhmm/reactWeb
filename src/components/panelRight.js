import React, {Component} from 'react'
import PanelItem from './panelItem'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

class PanelRight extends Component {
  render(){
    return (
      <div className={css(styles.container)}>
        {this.props.panelRightData.map(item => {
          return (
            <PanelItem key={item.heading} img={item.img} heading={item.heading}
              subtitle={item.subtitle}  content={item.content}/>
          )
        })}
      </div>
    )
  }
}

export default PanelRight
