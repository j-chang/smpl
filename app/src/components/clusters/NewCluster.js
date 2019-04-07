import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewCluster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clusterName: '',
      numWorkers: 3,
      workerType: 'r4.xlarge',
      availabilityZone: 'us-west-2'
    }
  }

  componentDidMount() {
  }

  renderClusterPreview(worker) {
    const firstNodeRow = [1]
    const secondNodeRow = []

    for (let i = 0; i < this.state.numWorkers; i++) {
      firstNodeRow.length < 6 ? firstNodeRow.push(1) : secondNodeRow.push(1)
    }

    const totalMemory = this.state.numWorkers * worker.memory + worker.memory
    const totalCores = this.state.numWorkers * worker.cores + worker.cores
    const specsLabel = totalMemory + ' GB ' + totalCores + ' Cores'

    return <div className='ClusterPreview-cluster'>
      <div className='StatusIcon is-inactive'></div>
      <span className='ClusterName'>{this.state.clusterName || 'Untitled Cluster'}</span>

      <div className='ClusterNodes'>
        <div className='NodeRow'>
          {firstNodeRow.map(() => <div className='on-demand'></div>)}
        </div>
        {!!secondNodeRow.length &&
          <div className='NodeRow'>
            {secondNodeRow.map(() => <div className='on-demand'></div>)}
          </div>
        }
        <div className='tooltip'>{specsLabel}</div>
      </div>

      <div className='ClusterPreview-specs'>{specsLabel}</div>

    </div>
  }

  render() {
    console.log(this.state)

    const workerOptions = [
      {name: 'r4.xlarge', memory: 31, cores: 4},
      {name: 'r4.2xlarge', memory: 61, cores: 8},
      {name: 'r4.4xlarge', memory: 122, cores: 16},
      {name: 'r4.8xlarge', memory: 244, cores: 32},
      {name: 'r4.8xlarge', memory: 244, cores: 32},
      {name: 'r4.16xlarge', memory: 488, cores: 64},
    ]

    const zones = [
      {name: 'us-west-1',   location: 'US West (N. California)'},
      {name: 'us-west-2',   location: 'US West (Oregon)'},
      {name: 'us-east-1',   location: 'US East (N. Virginia)'},
      {name: 'us-east-2',   location: 'US East (Ohio)'},
    ]

    const worker = workerOptions.reduce((a, b) =>  this.state.workerType === a.name ? a : b)

    return (
      <div className='NewCluster Content-with-sidebar'>
        <div className='ContentName'>New Cluster</div>
        <div className='ClusterPreview'>{this.renderClusterPreview(worker)}</div>

        <div className='NewCluster-form'>
          <div className='NewCluster-form-title'>Cluster Settings</div>

          <div className='NewCluster-form-label'>
            Cluster Name
            <input
              className='NewCluster-form-input'
              autoFocus
              placeholder='Cluster Name'
              type='text'
              value={this.state.clusterName}
              onChange={(e) => this.setState({clusterName: e.target.value})}
            />
          </div>

          <div className='NewCluster-form-label'>
            Workers
            <span className='NewCluster-form-num'>{this.state.numWorkers}</span>
            <input
              className='NewCluster-form-slider'
              type='range' min='0' max='11' step='1'
              value={this.state.numWorkers}
              onChange={(e) => this.setState({numWorkers: e.target.value})}
            />
          </div>

          <div className='NewCluster-form-label'>
            Worker Type
            <select
              className='NewCluster-form-input NewCluster-form-select'
              type='select'
              value={this.state.workerType}
              onChange={(e) => this.setState({workerType: e.target.value})}
            >
              {workerOptions.map((option) => <option value={option.name}>{option.name}</option>)}
            </select>
          </div>

          <div className='NewCluster-form-label'>
            Availability Zone
            <select
              className='NewCluster-form-input NewCluster-form-select'
              type='select'
              value={this.state.availabilityZone}
              onChange={(e) => this.setState({availabilityZone: e.target.value})}
            >
              {zones.map((option) => <option value={option.name}>{option.name}</option>)}
            </select>
          </div>

        </div>

        <div className='NewCluster-AdvancedOptions'>
          Advanced
          <div className='NewCluster-AdvancedOptions-caret-down'></div>
        </div>

        <div className='SubmitCluster' tabIndex='0' onClick={() => console.log('submit', this.state)}>
          Start Cluster
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(NewCluster)