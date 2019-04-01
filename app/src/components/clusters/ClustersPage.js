import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClustersSidebar from './ClustersSidebar'
import ClustersMain from './ClustersMain'

class ClustersPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { sub } = this.props.nav
    return (
      <div id='clusters-page'>
        <ClustersSidebar />
        {sub === '' && <ClustersMain />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ClustersPage)