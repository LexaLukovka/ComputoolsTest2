import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import counter from 'state/counter/action'

const initMapStateToProps = store => ({
  counter: store.counterReducer.counter,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    counter: bindActionCreators(counter, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
