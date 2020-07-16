import React from 'react'
import Photo from './Photo'
import styled from 'styled-components'

const GalleryStyles = styled.div`

display:flex;
justify-content:center;
flex-wrap:wrap;

`

const Photos = (props) => {
    const { photos } = props;

    return (
      <GalleryStyles className="photo-gallery">
        {
        photos.map(photos => 
        <Photo photo={photos} key={photos.id}  />)
        }
      </GalleryStyles>
    );
  };
  
  export default Photos