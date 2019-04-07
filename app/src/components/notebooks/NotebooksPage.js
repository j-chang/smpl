import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotebooksSidebar from './NotebooksSidebar'
import NotebooksMain from './NotebooksMain'
import NewNotebook from './NewNotebook'

class NotebooksPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { sub } = this.props.nav
    return (
      <div id='notebooks-page'>
        <NotebooksSidebar />
        {sub === '' && <NotebooksMain />}
        {sub === 'new-notebook' && <NewNotebook />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(NotebooksPage)