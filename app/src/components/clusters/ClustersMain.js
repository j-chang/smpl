import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeLocation } from '../../actions/navActions'

class ClustersMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderActiveCluster = this.renderActiveCluster.bind(this)
  }

  componentDidMount() {
  }

  changeLocation(main='clusters', sub='') {
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
        <i className='fas fa-ban'/>
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

      <div className='ClusterNotebook ClusterNotebook-inactive'><span>Notebook1</span></div>

      <div className='StartCluster'>
        <i className='fas fa-play'/>
      </div>
    </li>
  }

  render() {
    let activeClusters = [{
      id: 1,
      name: 'Cluster1',
      notebook: {},
      status: 'live' // starting, live, working, stopping, inactive
      // status: 'working'
    },
    {
      id: 2,
      name: 'Untitled Cluster - 10.28.19 (Quarterly Budgeting Report)',
      notebook: null,
      status: 'starting'
      // status: 'stopping'
      // status: 'working'
      // status: 'live'
    }]

    let inactiveClusters = [{
      id: 3,
      name: 'Simple Cluster',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Cluster4',
      status: 'inactive'
    }]

    // activeClusters = []
    // inactiveClusters = []

    return (
      <div className='ClustersMain Content-with-sidebar'>
        <div className='ContentName'>Clusters</div>

        {!!activeClusters.length &&
          <ul className='ActiveClusters List'>
            <div className='List-name'>Active</div>
            {activeClusters.length ? activeClusters.map(this.renderActiveCluster) :
              <div className='EmptyList'>No Active Clusters</div>
            }
          </ul>
        }

        <ul className='InactiveClusters List'>
          <div className='List-name'>Inactive</div>
          {inactiveClusters.length ? inactiveClusters.map(this.renderInactiveCluster) :
            <div className='EmptyList'>No Inactive Clusters</div>
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(ClustersMain)