import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getList} from '../action/todos.js';
// import PropTypes from 'prop-types'

const myTodos = [1, 1, 11, 11];
class User extends React.Component {
  constructor(props) {
    super(props)

  }
  onHandleClick() {
    alert(1)
  }

  render() {
    return (<div>
      <div>
        {
          myTodos.map(function(v, i) {
            return <p key={i}>{v + 2}</p>
          })
        }

      </div>
      <button onClick={this.onHandleClick.bind(this)}>
        Click Me</button>
    </div>)
  }

}
const mapStateToProps = state => ({
  todos: [
    myTodos, ...state.todos
  ]
})
const mapDispatchToProps = {
  getList: getList
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
