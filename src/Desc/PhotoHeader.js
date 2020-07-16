import React from "react"

const PhotoHeader = props => {

    return (
        <div className="header-div">
            <h2 className="rover-name">Rover: {props.name}</h2>
            <h3 className="camera-name">Camer: {props.full_name}</h3>
            <h3 className="camera-name">Date: {props.date}</h3>
            {console.log(props)}
        </div>
    )
}

export default PhotoHeader