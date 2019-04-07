import React, { Component } from 'react'
import { connect } from 'react-redux'

class ConnectDatabase extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className='ConnectDatabase Content-with-sidebar'>
        <div className='ContentName'>Connect Database</div>
        <div className='Section'>
          <div className='Section-name'>Amazon S3 Bucket</div>

          <div className='ConnectDatabase-copy'>
            Amazon S3 Buckets are accessible in your notebooks
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ConnectDatabase)