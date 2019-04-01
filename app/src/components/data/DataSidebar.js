import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../../actions/navActions'

class DataSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='data', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const { main, sub } = this.props.nav
    return (
      <ul id='sidebar-data' className='Sidebar'>
        <li className='SidebarLink SidebarLink-main' onClick={() => this.changeLocation('data')}>
          <a className={main === 'data' && sub === '' ? 'is-active' : ''} href='#'>Data</a>
        </li>

        <li className='SidebarLink SidebarLink-upload'>
          <label htmlFor='upload' className='SidebarLink-upload-label'>
            <input id='upload' type='file' style={{display: 'none'}} onChange={(e) => console.log(e.target.files)}/>
            Upload File
          </label>
        </li>
        <li className={'SidebarLink' + (sub === 'connect-database' ? ' is-active' : '')} onClick={() => this.changeLocation('data', 'connect-database')}><a href='#'>Connect Database</a></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(DataSidebar)