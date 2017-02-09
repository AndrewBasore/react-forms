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
        if(evt.target.value.length >16 || evt.target.value.length === 0){

        } else {
            this.setState({
                inputValue: evt.target.value
            })
        }
        console.log(this.state.inputValue)
    }

    handleSubmit (evt) {
        evt.preventDefault()
        this.setState({
            inputValue: ''
        })
        console.log(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValue={this.state.inputValue} />
            </div>
        )

    }
}