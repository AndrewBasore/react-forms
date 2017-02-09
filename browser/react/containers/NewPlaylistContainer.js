import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist'

export default class NewPlaylistContainer extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (evt) {
        this.setState({
            inputValue: evt.target.value
        })
        console.log(this.state.inputValue)
    }

    handleSubmit (evt) {
        //console.log(this.state.inputValue)
        console.log(evt)
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <div>
                <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )

    }
}