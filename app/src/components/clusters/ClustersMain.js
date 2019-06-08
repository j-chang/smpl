import React, { Component } from 'react'
import { connect } from 'react-redux'

class ClustersMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderActiveCluster = this.renderActiveCluster.bind(this)
  }

  componentDidMount() {
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

      {cluster.notebook ? <div className='ClusterNotebook'><span>Quickstart Guide</span></div> :
        <div className='ClusterNotebook ClusterNotebook-attach'><span>Attach Notebook</span></div>
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

      <div className='ClusterNotebook ClusterNotebook-inactive'><span>Attach Notebook</span></div>

      <div className='StartCluster'>
        <i className='fas fa-play'/>
      </div>
    </li>
  }

  render() {
    let activeClusters = [{
      id: 1,
      name: 'Simple Cluster',
      notebook: {},
      status: 'live' // starting, live, working, stopping, inactive
    }]

    let inactiveClusters = [{
      id: 2,
      name: 'Demo Cluster',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Inactive Cluster',
      status: 'inactive'
    }]

    // activeClusters = []
    // inactiveClusters = []

    return (
      <div className='ClustersMain Content-with-sidebar'>
        <div className='ContentName'>Clusters</div>
        <div className='ContentName-bottom-border'></div>

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