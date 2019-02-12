import React,{Component} from 'react'
// import PropTypes from 'prop-types'


class User extends React.Component{
  constructor(props){
    super(props)
  }
  onHandleClick(){
    alert(1)
  }

  render(){
    return (
      <div>
          <button onClick={this.onHandleClick.bind(this)}> Click Me</button>
      </div>
    )
  }

}

export default User
