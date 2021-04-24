/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emptyTasks, getTasks } from '../../actions/index'

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    type: state.type
  }
}

export class RefreshButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        className='btn btn-primary'
        type='button'
        onClick={() => {
          this.props.emptyTasks()
          this.props.getTasks()
        }}>
        REFRESH
      </button>
    )
  }
}

export default connect(
  mapStateToProps,
  { emptyTasks, getTasks }
)(RefreshButton)
