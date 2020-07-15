import React from 'react'
import Photo from './Photo'

const Photos = (props) => {
    const { photos } = props;

    return (
      <div className="photo-gallery">
        {
        photos.map(photos => 
        <Photo photo={photos} key={photos.id}/>)
        }
      </div>
    );
  };
  
  export default Photos