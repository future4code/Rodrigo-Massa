import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Playlists from './components/Playlists';

//CSS
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70vh;
  background-color: #191414;
  color: white;
`;

const TracksDiv = styled.div`
  border-top: 1px groove gray;
  background-image: linear-gradient(to top, #191414 0%, #1db954 900%);
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
`;

const SongDiv = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-between;
  align-items: center;
`;

const AddTrack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  background-color: #191414;
  color: #1DB954;
  font-weight: bold;
  font-size: 2em;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: black;
  color: white;
`;

const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: #191414;
  color: #1DB954;
  border-top: 0.5px groove gray;
`;

const H2Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;

const AddNewSongDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1vh;
  margin-bottom: 5vh;
`;

const AddNewTrack = styled.button`
  background-color: #04AA6D;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  height: 5vh;
  width: 5vh;
`;

const AddNewTrackButton = styled.button`
  background-color: #04AA6D;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
`;

const H2 = styled.h2`
  margin-top: 4vh;
  font-size: 2em;
`;

const TrackNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TrackNameP = styled.p`
  font-size: 1.5em;
`;

const ArtistNameP = styled.p`
  color: #1DB954;
`;

const TrackButtons = styled.div`
  display: flex;
  gap: 2vh;
`;

const PlayButton = styled.button`
  background-color: #04AA6D;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  height: 5vh;
  padding: 0 1vh;
`;

const DeleteButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  height: 5vh;
  width: 5vh;
`;


//CONSTANTES

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
    addPlaylist: false,
    addTrack: false,
    trackName: '',
    artistName: '',
    trackUrl: '',
    trackId: '',
  }

  componentDidMount() {
    this.getPlaylists()
  }

  componentDidUpdate() {
    this.getPlaylists()
    // this.getTracks()
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

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
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

  addTrackConfirmation = () => {
    this.setState({ addTrack: !this.state.addTrack })
  }

  addTrackToPlaylist = (playlist) => {
    const body = {
      name:this.state.trackName,
      artist:this.state.artistName,
      url:this.state.trackUrl,      
  }

    axios
      .post(`${url}/${playlist.id}/tracks`, body, headers)
      .then((res) => {
        this.setState({
          addTrack: false,
          trackName: '',
          artistName: '',
          trackUrl: '',
        })
        this.getTracks(playlist)
      })
      .catch((err) => console.log(err))
  }

  deleteTrack = (trackId) => {
    let confirmation = window.confirm("Tem certeza que deseja excluir esta faixa?")

    if (confirmation) {
      axios
        .delete(`${url}/${this.state.playlist.id}/tracks/${trackId}`, headers)
        .then((res) => {
          alert('Faixa deletada!')
          this.getTracks(this.state.playlist)
        })
        .catch((err) => console.log(err))
    }
  }

  render() {

    const tracks = this.state.playlistTracks.map((track) => {
      return (
        <SongDiv key={track.id}>
          <TrackNameDiv>
          <TrackNameP> {track.name} </TrackNameP>
          <ArtistNameP> {track.artist} </ArtistNameP>
          </TrackNameDiv>
          <TrackButtons>
          <PlayButton> Play </PlayButton>
          <DeleteButton onClick={() => this.deleteTrack(track.id)}> X </DeleteButton>
          </TrackButtons>
        </SongDiv>
      )
    })

    let renderAddTrack

    if(this.state.addTrack) {
      renderAddTrack = 
        <AddTrack>
          <input 
            name="trackName"
            placeholder="Nome da música" 
            value={this.state.trackName}
            onChange={this.handleFieldChange}/>
            <input 
            name="artistName"
            placeholder="Nome do artista" 
            value={this.state.artistName}
            onChange={this.handleFieldChange}/>
            <input 
            name="trackUrl"
            placeholder="URL da música" 
            value={this.state.trackUrl}
            onChange={this.handleFieldChange}/>
          <AddNewTrackButton 
            onClick={() => this.addTrackToPlaylist(this.state.playlist)}> Adicionar Música </AddNewTrackButton>
        </AddTrack>
    }


    return (
      <MainDiv>
        <Header> Labefy </Header>
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
            <H2Div>
              <H2> Músicas </H2>
              <AddNewSongDiv>
                <p> Adicionar Música </p>
                <AddNewTrack onClick={() => this.addTrackConfirmation()}> + </AddNewTrack>
              </AddNewSongDiv>
            </H2Div>
            {renderAddTrack}
            {tracks}
          </TracksDiv>
        </Main>
        <PlayerDiv> Player </PlayerDiv>
        <Footer> Desenvolvido por Rodrigo Massa </Footer>
      </MainDiv>
    )
  }
}