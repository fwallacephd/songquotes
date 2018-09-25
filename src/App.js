import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Song from './Song/Song';
import Footer from './Footer/Footer';



class App extends Component {
  state = {
    songInformation: 0,
    songs: [
      {artist: 'Jillette Johnson', song: "When the Ship Goes Down", album: "Whater in a Whale", quote: "I wanna live in a better part of town. Where I don't have to hide my diamonds. The bourgeois are bubbling around. But they can't touch my sweet asylum. They'll put me on the first life boat out. When the ship goes down."},
      {artist: 'Roger Clyne & the Peacemakers', song: "Beautiful Disaster", album: "Honky Tonk Union", quote: "Let's squeeze every drop out of this machine. The coffee, the diesel, the methamphhetamines. Till this Goddamn rig can't run no faster. Baby ain't we a beautiful disaster."},
      {artist: 'Dean Lewis', song: "Need You Now", album: "Same Kind of Different", quote: "I just need your talking nnext to me when I wake up, wake up. Talking next to me when I wake up next to you. When I'm hungover too."},
      {artist: 'Kris Allen', song: "My Weakness", album: "Thank you Camella", quote: "Tell me you want me, speechless and I'm shaking. Tell me you need me. You better believe me when I say that you are my weakness. You are my weakness, and you get me every time."},
      {artist: 'Tori Amos', song: "Silent All These Years", album: "Little Earthquakes", quote: "Years go by, will I still be waiting for somebody else to understand. Years go by. If I'm stripped of my beauty and the orange clouds raining in my head."},

    ]
  }

  randomizeQuoteHandler = () => {
    //console.log("click");
    let randomQuote = Math.floor(Math.random() * 5);
    this.setState({songInformation: randomQuote});
    
  }

  render() {
    console.log(this.state);
    //console.log(this.state.songs.songInformation)
    //this.state.songs[this.state.songInformation]
    let songInformation = this.state.songInformation
    let song = this.state.songs[songInformation]

    
    

    return (
      <div className="App">
        <div className="row heading">
          <div className="col-md-12 text-center">
            <p className="title text-center">Random Quote Generator</p>
            <p className="subtitle text-center"><i className="fas fa-headphones-alt"></i>  Music Edition  <i className="fas fa-headphones-alt"></i></p>
          </div>
        </div>
        <Button onClick={this.randomizeQuoteHandler}></Button>
        <Song artist={song.artist} song={song.song} album={song.album} quote={song.quote} ></Song>
        <Footer></Footer>
        </div>
        

    );
  }
}

export default App;
