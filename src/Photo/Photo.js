import React from 'react';

const Photo = props => {
    const { url } = props
    console.log("hey hey, photo object-san!")

    return (
        <div className="image-container">
            <img alt="" src={url} />
        </div>
    )
};

export default Photo