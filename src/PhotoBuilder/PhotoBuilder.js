import React from 'react'
import Photo from '../Photo/Photo'

const Photos = (props) => {
    const { photos } = props;
  
    return (
      <div className="photo-gallery">
        {
        photos.map(photos => 
        <Photo url={photos.img_src} key={photos.id} />)
        }    
      </div>
    );
  };
  
  export default Photos