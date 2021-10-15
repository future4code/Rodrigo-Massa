import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Tracks from './Tracks';


const MainDiv = styled.div`
  border: 1px solid black;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  max-height: 86vh;
`;

const PlaylistDiv = styled.div`
  display: flex;
  border: 1px solid red;
  width: 10vw;
  margin: 1vh 0;
  justify-content: space-between;
`;


export default class Playlists extends React.Component {

  state = {
    addPlaylist: false,
  }

  addPlaylistConfirmation = () => {
    this.setState({ addPlaylist: !this.state.addPlaylist })
  }

  render() {

    const playlists = this.props.allPlaylists.map((playlist) => {
      return (
        <PlaylistDiv key={playlist.id} onClick={() => this.props.getTracks(playlist)}>
          {playlist.name}
          <button onClick={() => this.props.deletePlaylist(playlist.id)}> X </button>
        </PlaylistDiv>
      )
    })

    let renderAddPlaylist

    if(this.state.addPlaylist) {
      renderAddPlaylist = 
        <div>
          <input 
            placeholder="Nome da Playlist" 
            value={this.props.playlistName}
            onChange={this.props.fieldChange}/>
          <button onClick={() => this.props.createPlaylist()}> Add Playlist </button>
        </div>
    }

    return (
      <MainDiv>
        <div>
          <h2> Playlists </h2>
        </div>
        <div>
          <button onClick={this.addPlaylistConfirmation}> Add Playlist </button>
          {renderAddPlaylist}
        </div>
        <div>
          {playlists}
        </div>
      </MainDiv>
    )
  }
}