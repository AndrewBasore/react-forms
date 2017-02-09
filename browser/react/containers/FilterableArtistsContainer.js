import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends Component {
    constructor(props){
        super();
        this.state = {
            inputValue: ''
        }
        this.onHandleChange= this.onHandleChange.bind(this);
    }

    onHandleChange (evt){
        console.log(evt.target.value)
        this.setState({
            inputValue: evt.target.value
        })
        //console.log(this.state)
    }

    filtered (allArtists){
        return allArtists.filter(artist => {
            return artist.name.includes(this.state.inputValue)
        })
    }

    render(){
        var filteredListofArtists = this.filtered(this.props.artists)
        //console.log(filteredListofArtists)
        return (
            <div>
                <FilterInput onHandleChange={this.onHandleChange} />
                <Artists artists={filteredListofArtists} />
            </div>
        )
    }
}