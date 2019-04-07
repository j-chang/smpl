import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewNotebook extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className='NewNotebook Content-with-sidebar'>
        <div className='ContentName'>New Notebook</div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(NewNotebook)