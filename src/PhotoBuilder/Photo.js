import React from 'react';
import PhotoHeader from '../Desc/PhotoHeader'

const Photo = props => {
    const { photo } = props
    console.log("hey hey, photo object-san!")

    return (
        <div className="image-container">
        {/* <PhotoHeader props={photo.rover.name} /> */}
        <img className="mars" alt="" src={photo.img_src} />
        </div>
    )
};

export default Photo