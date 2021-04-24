/* eslint-disable no-useless-constructor */
import './Tasks.css'
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions/index'

export class Tasks extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <section className='container container-margin'>
      <ol>
          {this.props.tasks === undefined ? 'Loading...' :
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
  </section >
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.remoteTasks
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Tasks)
