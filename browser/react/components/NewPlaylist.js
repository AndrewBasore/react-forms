import React from 'react';

const NewPlaylist = function (props) {

    return (
    <div className="well">
        {
            props.disabled && <div className="alert alert-warning" >Please enter a name between 1 and 16 chars</div>
        }

        <form className="form-horizontal" onSubmit={props.handleSubmit}>
            <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                <input className="form-control" type="text" onChange={props.handleChange} value={props.inputValue} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={props.disabled}>Create Playlist</button>
                </div>
            </div>
            </fieldset>
        </form>
    </div>
)}

export default NewPlaylist
