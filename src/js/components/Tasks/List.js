/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emptyTasks, getTasks } from '../../actions/index'
import * as types from '../../constants/action-types'

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    type: state.type
  }
}

export class Tasks extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.emptyTasks()
    this.props.getTasks()
  }

  render() {
    console.log('List this.props.type>>>' + this.props.type)
    return (
      <ol>
        {this.props.type === types.EMPTY_TASKS ? 'Loading...' :
          this.props.tasks.length === 0 ? 'No task found!' :
            this.props.tasks.map(v =>
              <li data-testid='taskIndex' key={v.id}>
                <div className='row'>
                  <div className='col-4' data-testid='task'>{v.task}</div>
                  <div className='col-4'>
                    <span>Rating : </span>
                    <span>{v.averageUserRating.toLocaleString('en', { style: 'percent' })}</span>
                  </div>
                  <div className='col-4'>
                    <span>Guest: </span><span data-testid='guest'>{v.guest}</span>
                  </div>
                </div>
                {v.tags.map(t =>
                  <span className='badge' key={t} data-testid='tag'>
                    {'・' + t}</span>)}
              </li>
            )}
      </ol>
    )
  }
}

export default connect(
  mapStateToProps,
  { emptyTasks, getTasks }
)(Tasks)
