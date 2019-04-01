import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../../actions/navActions'

class ClustersSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='clusters', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const { main, sub } = this.props.nav
    return (
      <ul id='sidebar-clusters' className='Sidebar'>
        <li className='SidebarLink SidebarLink-main' onClick={() => this.changeLocation('clusters')}>
          <a className={main === 'clusters' && sub === '' ? 'is-active' : ''} href='#'>Clusters</a>
        </li>

        <li className={'SidebarLink' + (sub === 'new-cluster' ? ' is-active' : '')} onClick={() => this.changeLocation('clusters', 'new-cluster')}><a href='#'>New Cluster</a></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ClustersSidebar)