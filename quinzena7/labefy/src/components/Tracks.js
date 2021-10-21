import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';


const MainDiv = styled.div`
  border: 1px solid green;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const TrackDiv = styled.div`
//   border: 1px solid red;
//   display: flex;
//   height: 50vh;
// `;


export default class Tracks extends React.Component {
  render() {

    // const tracks = this.state.playlistTracks.map((track) => {
    //   return (
    //     <div key={track.id}>
    //       <p> {track.name} </p>
    //       <p> {track.artist} </p>
    //       <button> Play </button>
    //       <button> X </button>
    //     </div>
    //   )
    // })

    return (
      <MainDiv>
          <h2> Tracks </h2>
          {/* <div> {tracks} </div> */}
      </MainDiv>
    )
  }
}