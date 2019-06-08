import React, { Component } from 'react'
import { connect } from 'react-redux'

class ConnectDatabase extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='ConnectDatabase Content-with-sidebar'>
        <div className='ContentName'>Connect Database</div>
        <div className='ContentName-bottom-border'></div>

        <div className='EmptyList' style={{margin: '36px 60px'}}>
          Not Available in Demo Mode
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ConnectDatabase)