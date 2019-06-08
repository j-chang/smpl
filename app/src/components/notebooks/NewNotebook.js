import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import python from 'codemirror/mode/python/python'
import { connect } from 'react-redux'

class NewNotebook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commands: ['# python code']
    }

    this.codeMirrorOptions = {
      mode: 'python',
      lineNumbers: true,
      theme: 'material'
    }

    this.updateCommand = this.updateCommand.bind(this)
    this.renderCommand = this.renderCommand.bind(this)
    this.addCommand = this.addCommand.bind(this)
  }

  componentDidMount() {
  }

  updateCommand(newCode, i) {
    const updatedCommands = this.state.commands.slice()
    updatedCommands[i] = newCode

    this.setState({commands: updatedCommands})
  }

  renderCommand(command, i) {
    return <CodeMirror key={i} className='NotebookCommand' value={command} onChange={(newCode) => this.updateCommand(newCode, i)} options={this.codeMirrorOptions} />
  }

  addCommand() {
    const commands = this.state.commands.slice()
    commands.push('# python code')
    this.setState({commands})
  }

  render() {
    console.log(this.state.commands)
    return (
      <div className='NewNotebook Content-with-sidebar'>
        <div className='ContentName'>New Notebook</div>
        <div className='ContentName-bottom-border'></div>

        {this.state.commands.map((x, i) => this.renderCommand(x, i))}

        <div className='AddCommand' onClick={this.addCommand}>Add Command</div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(NewNotebook)