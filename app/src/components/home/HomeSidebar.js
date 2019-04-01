import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../../actions/navActions'
import { Link } from 'react-router-dom'

class HomeSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='home', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const { main, sub } = this.props.nav
    return (
      <ul id='sidebar-home' className='Sidebar'>
        <li className='SidebarLink SidebarLink-main' onClick={() => this.changeLocation('home')}>
          <a className={main === 'home' && sub === '' ? 'is-active' : ''} href='#'>Home</a>
        </li>

        <li className='SidebarLink SidebarLink-upload' onClick={() => this.changeLocation('data')}><Link to='/data'>Upload File</Link></li>
        <li className='SidebarLink' onClick={() => this.changeLocation('notebooks', 'new-notebook')}><Link to='/notebooks'>New Notebook</Link></li>
        <li className='SidebarLink' onClick={() => this.changeLocation('clusters', 'new-cluster')}><Link to='/clusters'>New Cluster</Link></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(HomeSidebar)