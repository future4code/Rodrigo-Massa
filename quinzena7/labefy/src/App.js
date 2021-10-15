import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Playlists from './components/Playlists';
// import Tracks from './components/Tracks';


const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  margin: auto;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TracksDiv = styled.div`
  border: 1px solid green;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
    Authorization: 'rodrigo-massa-banu'
  }
}

export default class App extends React.Component {

  state = {
    allPlaylists: [],
    playlistName: '',
    playlistDetail: '',
    playlistTracks: [],
    playlist: '',
  }

  componentDidMount() {
    this.getPlaylists()
  }

  componentDidUpdate() {
    this.getPlaylists()
  }

  getPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ allPlaylists: res.data.result.list })
      })
      .catch((err) => console.log(err))
  }

  createPlaylist = () => {
    const body = {
      name: this.state.playlistName
    }

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Playlist criada com sucesso!")
        this.setState({ playlistName: '' })
        this.getAllPlaylists()
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  deletePlaylist = (id) => {
    const confirmation = window.confirm("Tem certeza que deseja excluir esta playlist?")

    if (confirmation){
      axios
        .delete(`${url}/${id}`, headers)
        .then((res) => { this.getAllPlaylists() })
        .catch((err) => console.log(err))
    }
  }

  fieldChange = (e) => {
    this.setState({ playlistName: e.target.value })
  }

  getTracks = (playlist) => {
    axios
      .get(`${url}/${playlist.id}/tracks`, headers)
      .then((res) => {
        this.setState({ 
          playlistTracks: res.data.result.tracks, 
          playlist: playlist
        })

      })
      .catch((err) => {
        alert(err.response)
      })
  }

  render() {

    const tracks = this.state.playlistTracks.map((track) => {
      return (
        <div key={track.id}>
          <p> {track.name} </p>
          <p> {track.artist} </p>
          <button> Play </button>
          <button> X </button>
        </div>
      )
    })


    return (
      <MainDiv>
        <header> Header </header>
        <Main> 
          <Playlists 
            allPlaylists={this.state.allPlaylists}
            deletePlaylist={this.deletePlaylist}
            url={url}
            headers={headers}
            fieldChange={this.fieldChange}
            createPlaylist={this.createPlaylist}
            playlistName={this.state.playlistName}
            getTracks={this.getTracks}
          />
          <TracksDiv>
            <div>
              <h2> Músicas </h2>
            </div>
            {tracks}
          </TracksDiv>
        </Main>
        <footer> Footer </footer>
      </MainDiv>
    )
  }
}