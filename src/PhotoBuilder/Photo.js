import React from 'react';
import PostHeader from '../Desc/PhotoHeader'
import styled from 'styled-components'

const PhotoStyles = styled.img`

    width:200px;
    height:200px;
    margin:2%;
    padding:2%;
`

const Photo = props => {
    const { photo } = props

    return (
        <div className="image-container">
        <PostHeader name={photo.rover.name} full_name={photo.camera.full_name} date={photo.earth_date}/>
        <PhotoStyles className="mars" alt="" src={photo.img_src} />
        </div>
    )
};

export default Photo