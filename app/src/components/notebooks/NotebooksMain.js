import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotebooksMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  renderNotebook(notebook) {
    return <li className='List-item Notebook' key={notebook.id}>
      <span className='NotebookName'>{notebook.name}</span>

      {notebook.cluster ? <div className='Notebook-cluster xis-working'><div className='Notebook-cluster-icon' /><span>Cluster1</span></div> :
        <div className='Notebook-cluster Notebook-cluster-attach'><span>Not Attached</span></div>
      }

      <div className='NotebookAction NotebookAction-copy'><i className='far fa-copy'/></div>
      <div className='NotebookAction NotebookAction-delete'><i className='far fa-trash-alt'/></div>

    </li>
  }

  render() {
    let notebooks = [{
      id: 1,
      name: 'Quickstart Guide to Smpldata',
      cluster: 1
    },
    {
      id: 2,
      name: 'Create a Simple Cluster',
      cluster: null
    },
    {
      id: 3,
      name: 'Untitled Notebook - 10.28.19 (Quarterly Budgeting Report)',
      cluster: null
    }]

    // notebooks = []

    return (
      <div className='NotebooksMain Content-with-sidebar'>
        <div className='ContentName'>Notebooks</div>
        <ul className='Notebooks List'>
          {notebooks.length ? notebooks.map(this.renderNotebook) :
            <div className='EmptyList'>No Notebooks</div>
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(NotebooksMain)