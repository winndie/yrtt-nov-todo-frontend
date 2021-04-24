/* eslint-disable no-useless-constructor */
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions/index'

export class RefreshButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        className='btn btn-primary'
        type='button'
        onClick={()=>this.props.getData()}>
        REFRESH
      </button>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(RefreshButton)
