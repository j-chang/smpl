import React, { Component } from 'react'
import { connect } from 'react-redux'

class AccountMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='AccountMain Content-with-sidebar'>
        <div className='Section'>
          <div className='Section-name'>Account Settings</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(AccountMain)