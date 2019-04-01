import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeLocation } from '../../actions/navActions'

class HomeMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderActiveCluster = this.renderActiveCluster.bind(this)
  }

  componentDidMount() {
  }

  changeLocation(main='home', sub='') {
    this.props.dispatch(changeLocation(main, sub))
  }

  renderActiveCluster(cluster) {
    return <li className='List-item ActiveCluster' key={cluster.id}>
      <div className={`StatusIcon is-${cluster.status}`}></div>
      <span className='ClusterName'>{cluster.name}</span>

      <div className='ClusterNodes'>
        <div className='NodeRow'>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
        </div>
        <div className='NodeRow'>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
          <div className='on-demand'></div>
          <div className='spot'></div>
          <div className='spot'></div>
          <div className='spot'></div>
        </div>
        <div className='tooltip'>244 GB 32 Cores</div>
      </div>

      {cluster.notebook ? <div className='ClusterNotebook'><span>Untitled Notebook</span></div> :
        <Link to='/notebooks' className='ClusterNotebook ClusterNotebook-attach' onClick={() => this.changeLocation('notebooks')}>
          <span>Attach Notebook</span>
        </Link>
      }

      <div className={`StopCluster ${cluster.status === 'stopping' ? 'StopCluster-stopping' : ''}`}>
        <i className='fas fa-pause'/>
      </div>
    </li>
  }

  renderInactiveCluster(cluster) {
    return <li className='List-item InactiveCluster' key={cluster.id}>
      <div className={`StatusIcon is-${cluster.status}`}></div>
      <span className='ClusterName'>{cluster.name}</span>

      <div className='ClusterNodes'>
        <div className='NodeRow'>
          <div className='spot'></div>
          <div className='spot'></div>
          <div className='spot'></div>
          <div className='spot'></div>
        </div>
        <div className='tooltip'>62 GB 8 Cores</div>
      </div>

      <div className='ClusterNotebook ClusterNotebook-inactive'><span>Attach Notebook</span></div>

      <div className='StartCluster'>
        <i className='fas fa-play'/>
      </div>
    </li>
  }

  renderNotebook(notebook) {
    return <li className='List-item Notebook' key={notebook.id}>
      <span className='NotebookName'>{notebook.name}</span>
    </li>
  }

  render() {
    let activeClusters = [{
      id: 1,
      name: 'Simple Cluster',
      notebook: {},
      // status: 'live' // starting, live, working, stopping, inactive
      status: 'working'
    },
    {
      id: 2,
      name: 'Untitled Cluster - 10.28.19',
      notebook: null,
      // status: 'starting'
      // status: 'stopping'
      // status: 'working'
      status: 'live'
    }]

    let inactiveClusters = [{
      id: 3,
      name: 'Simple Cluster',
      status: 'inactive'
    }]

    activeClusters = []
    // inactiveClusters = []

    let notebooks = [{
      id: 1,
      name: 'Quickstart Guide to Smpldata',
      cluster: 1
    },
    {
      id: 2,
      name: 'Create a Simple Cluster',
      cluster: null
    }]

    // notebooks = []

    return (
      <div className='HomeMain Content-with-sidebar'>
        <div className='ContentName'>Dashboard</div>

        {activeClusters.length ?
          <ul className='ActiveClusters List'>
            <div className='List-name'>Active Clusters</div>
            {activeClusters.map(this.renderActiveCluster)}
          </ul> :

          <ul className='InactiveClusters List'>
            <div className='List-name'>Clusters</div>
            {inactiveClusters.length ? inactiveClusters.map(this.renderInactiveCluster) :
              <div className='EmptyList'>No Clusters</div>
            }
          </ul>
        }

        <ul className='Notebooks List'>
          <div className='List-name'>Notebooks</div>
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

export default connect(mapStateToProps)(HomeMain)