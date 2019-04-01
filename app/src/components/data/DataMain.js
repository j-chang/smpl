import React, { Component } from 'react'
import { connect } from 'react-redux'

class DataMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  renderFile(file) {
    return <li className='DataFile' key={file.id}>

      <div><div className='DataFile-load'><i className='fas fa-toggle-on' /></div></div>
      <div className='DataFile-name'>{file.name}</div>
      <div className='DataFile-progress'><div className='DataFile-progress-bar'><div className='DataFile-progress-bar-status'></div></div></div>
      <div className='DataFile-size'>{file.size}</div>
      <div className='DataFile-date'>{file.created_date}</div>
      <div className='DataFile-actions'><div className='DataFile-actions-delete'><i className='far fa-trash-alt' /></div></div>

    </li>
  }

  render() {
    let files = [{
      id: 1,
      name: 'Untitled File',
      size: '58.7 KB',
      created_date: '2/8/18'
    },
    {
      id: 2,
      name: 'Untitled File - 10.12.19 (Quarterly Budgeting Report)',
      size: '77 KB',
      created_date: '10/12/19'
    },
    {
      id: 3,
      name: 'Quarterly Budgeting Report - 10.28.19',
      size: '5.1 GB',
      created_date: '10/28/19'
    },
    {
      id: 4,
      name: 'locations.csv',
      size: '33.2 KB',
      created_date: '10/30/19'
    }]

    // files = []

    return (
      <div className='DataMain Content-with-sidebar'>
        <div className='ContentName'>Files</div>
        <div className='Files'>
          <ul className='FilesList'>
            <div className='FilesList-head'>
              <div className='FilesList-head-load'></div>
              <div className='FilesList-head-name'>Name</div>
              <div className='FilesList-head-progress'></div>
              <div className='FilesList-head-size'>Size</div>
              <div className='FilesList-head-date'>Created</div>
              <div className='FilesList-head-actions'></div>
            </div>
            {files.map(this.renderFile)}
          </ul>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(DataMain)