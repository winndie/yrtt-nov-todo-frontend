import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addTask: tasks => dispatch(addTask(tasks))
    // searchTask: tasks => dispatch(searchTask(tasks))
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.remoteTasks
  }
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props)
    this.state = {filter:'',tasks:this.props.tasks}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log('handleChange this.props.tasks>>>'+this.props.tasks.length)
    console.log('handleChange this.state.filter>>>'+this.state.filter)
    this.setState({[event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.searchTask(this.state.filter)
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
