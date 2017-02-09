import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist'
import axios from "axios";

export default class NewPlaylistContainer extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            disabled: true
        }
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (evt) {
        this.setState({
            inputValue: evt.target.value
        })
        if(evt.target.value.length >16 || evt.target.value.length === 0){
            this.setState({
                disabled: true
            });
        } else {
            this.setState({
                disabled: false
            });
        }
        console.log(this.state.inputValue)
    }

    handleSubmit (evt) {
        evt.preventDefault()
        this.setState({
            inputValue: ''
        })
        this.props.addPlaylist(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputValue={this.state.inputValue}  disabled={this.state.disabled}/>
            </div>
        )

    }
}
