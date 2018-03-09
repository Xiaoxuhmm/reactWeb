import {connect} from 'react-redux';
import {addSymbol, removeSymbol} from '../actions'
import StockAnalysisDemo from '../components/stockAnalysisDemo'

const mapStateToProps = (state) => ({
  stocks: state.stocks
})

const mapDispatchToProps = (dispatch) => {

  return {
    handleSubmit: symbol => {
      dispatch(addSymbol(symbol))
    },
    handleRemove: symbol => {
      dispatch(removeSymbol(symbol))
    }
  }
}

const StockAnalysisDemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockAnalysisDemo)

export default StockAnalysisDemoContainer
