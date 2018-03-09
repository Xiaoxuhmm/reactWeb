import React, {Component} from 'react';
import {FormControl, Button, Table} from 'react-bootstrap';
import {connect} from 'react-redux'
import {addSymbol} from '../actions'
import {Link} from 'react-router-dom'

let createHandlers = function(dispatch) {
  let onClick = function(data) {
    dispatch(addSymbol(data))
  };

  return {
    onClick,
    // other handlers
  };
}

class StockAnalysisDemo extends Component{
  constructor({stocks, handleSubmit, handleRemove}){
    super();
    console.log(stocks)
    console.log('StockAnalysisDemo rendered')
    this.state = {
      input : '',
      stocks,
      handleSubmit,
      handleRemove
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({input: e.target.value});
  }

  componentWillReceiveProps(props){
    this.setState({stocks: props.stocks})
  }

  render(){
    return(
      <div>
        <form>
          <FormControl
            type="text"
            value={this.state.input}
            placeholder="Enter symbol"
            onChange={this.handleChange}
          />
          <Button onClick={() => {
            this.state.handleSubmit(this.state.input)
            this.setState({input: ''})
          }}>Add New Stock</Button>
          <Button onClick={() => {
            this.state.handleRemove(this.state.input)
            this.setState({input: ''})
          }}>Remove Stock</Button>
          <Link to='/'>
            <Button>Close Demo</Button>
          </Link>
        </form>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th style={{textAlign: 'center'}}>#</th>
              <th style={{textAlign: 'center'}}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map((stock, index) => {
                return(
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{stock}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }

}

export default connect()(StockAnalysisDemo)
