import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

function mapDispatchToProps(dispatch) {
  return {
    // addTask: tasks => dispatch(actions.addTask(tasks))
    searchTask: tasks => dispatch(actions.searchTask(tasks))
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props)
    this.state = {filter:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log('handleChange this.props.tasks>>>'+this.props.tasks[0].task)
    console.log('handleChange this.state.filter>>>'+this.state.filter)
    this.setState({[event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { filter } = this.state;
    this.props.searchTask({ filter })
    // this.props.searchTask(this.props.tasks)
    this.setState({ filter:'' })
  }
  render() {
    const { filter } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='filter'>Search for tasks</label>
          <input
            type='text'
            id='filter'
            value={filter}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit'>SEARCH</button>
      </form>
    )
  }
}

// const Form = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedForm)
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm)
export default Form
