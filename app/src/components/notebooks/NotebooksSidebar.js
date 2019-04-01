import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../../actions/navActions'

class NotebooksSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  changeLocation(main='notebooks', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  render() {
    const { main, sub } = this.props.nav
    return (
      <ul id='sidebar-notebooks' className='Sidebar'>
        <li className='SidebarLink SidebarLink-main' onClick={() => this.changeLocation('notebooks')}>
          <a className={main === 'notebooks' && sub === '' ? 'is-active' : ''} href='#'>Notebooks</a>
        </li>

        <li className={'SidebarLink' + (sub === 'new-notebook' ? ' is-active' : '')} onClick={() => this.changeLocation('notebooks', 'new-notebook')}><a href='#'>New Notebook</a></li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(NotebooksSidebar)