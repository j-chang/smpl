import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataSidebar from './DataSidebar'
import DataMain from './DataMain'
import ConnectDatabase from './ConnectDatabase'

class DataPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { sub } = this.props.nav
    return (
      <div id='data-page'>
        <DataSidebar />
        {sub === '' && <DataMain />}
        {sub === 'connect-database' && <ConnectDatabase />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(DataPage)