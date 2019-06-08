import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeLocation } from '../../actions/navActions'

class ClustersSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='clusters', sub='') {
    this.props.nav.sub === sub ? sub = '' : null
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const { main, sub } = this.props.nav
    return (
      <ul id='sidebar-clusters' className='Sidebar'>
        <Link to='/' className='LogoContainer' onClick={() => this.changeLocation('home')}>
          <img id='logo' src='./assets/brand.svg' alt='smpldata'/>
        </Link>

        <li className='SidebarLink' onClick={() => this.changeLocation('data')}><Link to='/data'>Data</Link></li>
        <li className='SidebarLink' onClick={() => this.changeLocation('notebooks')}><Link to='/notebooks'>Notebooks</Link></li>
        <li className='SidebarLink is-active' onClick={() => this.changeLocation('clusters')}><Link to='/clusters'>Clusters</Link></li>

        <div className='Sidebar-sub'>
          <li className={'SidebarLink' + (sub === 'new-cluster' ? ' is-active' : '')} onClick={() => this.changeLocation('clusters', 'new-cluster')}><a href='#'>New Cluster</a></li>
        </div>

        <li className='SidebarLink SidebarLink-account' onClick={() => this.changeLocation('account')}><Link to='/clusters'>Account</Link></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ClustersSidebar)