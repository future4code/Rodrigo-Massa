import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// import Tracks from './Tracks';


const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  max-height: 86vh;
  background-color: black;
  color: white;
  gap: 2vh;
  padding-top: 5vh;
`;

const PlaylistDiv = styled.div`
  display: flex;
  color: white;
  width: 10vw;
  margin: 2vh 0;
  justify-content: space-between;
  align-items: center;
`;

const DivNewPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
`;

const NewPlaylist = styled.button`
  background-color: #04AA6D;
  border: none;
  color: white;
  /* padding: 20px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  height: 5vh;
  width: 5vh;
`;

const DeletePlaylist = styled.button`
  background-color: red;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  height: 3vh;
  width: 3vh;
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
          <DeletePlaylist onClick={() => this.props.deletePlaylist(playlist.id)}> X </DeletePlaylist>
        </PlaylistDiv>
      )
    })

    let renderAddPlaylist

    if(this.state.addPlaylist) {
      renderAddPlaylist = 
        <DivInputPlaylist>
          <input 
            placeholder="Nome da Playlist" 
            value={this.props.playlistName}
            onChange={this.props.fieldChange}/>
          <AddPlaylistButton onClick={() => this.props.createPlaylist()}> Add Playlist </AddPlaylistButton>
        </DivInputPlaylist>
    }

    return (
      <MainDiv>
        <div>
          <h2> Playlists </h2>
        </div>
        <DivNewPlaylist>
          <NewPlaylistOutDiv>
          <p> Adicionar Playlist </p>
          <NewPlaylist onClick={this.addPlaylistConfirmation}> + </NewPlaylist>
          </NewPlaylistOutDiv>
          {renderAddPlaylist}
        </DivNewPlaylist>
        <div>
          {playlists}
        </div>
      </MainDiv>
    )
  }
}

const NewPlaylistOutDiv = styled.div`
  display: flex;
  gap: 2vh;
`;

const DivInputPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const AddPlaylistButton = styled.button`
  background-color: #04AA6D;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
`;
