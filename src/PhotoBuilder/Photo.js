import React from 'react';
import PostHeader from '../Desc/PhotoHeader'

const Photo = props => {
    const { photo } = props
    
    return (
        <div className="image-container">
        <PostHeader name={photo.rover.name} full_name={photo.camera.full_name} date={photo.earth_date}/>
        <img className="mars" alt="" src={photo.img_src} />
        </div>
    )
};

export default Photo