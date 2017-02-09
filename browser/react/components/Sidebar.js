import React from 'react';
import { Link } from 'react-router';
import NewPlaylist from './NewPlaylist'

const Sidebar = (props) => {
  console.log(props.playlists);

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>
      <hr />
        <section>
        <h4 className="text-muted">PLAYLISTS</h4>
          <ul className="list-unstyled">
            {
              props.playlists && props.playlists.map(playlist =>
                (<li className="playlist-item menu-item" key={playlist.id}>
                <Link to="">{playlist.name}</Link>
              </li>)
              )
            }
          </ul>
          <hr />
          <h4>
            <Link className="btn btn-primary btn-block" to={'/NewPlaylist'}>
              <span className="glyphicon glyphicon-plus"></span> PLAYLIST
            </Link>
          </h4>
        </section>
    </sidebar>
  );
}

export default Sidebar;
