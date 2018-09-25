import React from 'react';

const song = (props) => {
  return (
   <div className="songInformation">
    <p className="artist text-center">Artist: </p>
    <p className="text-center artistName">{props.artist} </p>
    <p className="song text-center">Song: </p>
    <p className="text-center songName">{props.song}</p>
    <p className="album text-center">Album: </p>
    <p className="text-center albumName">{props.album}</p>
    <p className="quote text-center">Quote: </p>
    <p className="text-center quoteName">{props.quote}</p>
   </div> 
   
  );
}

export default song;

