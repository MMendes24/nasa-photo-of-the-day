import React from 'react';
import PhotoFooter from '../Desc/PhotoFooter'
import styled from 'styled-components'

const PhotoStyles = styled.img`

    width: 75%;
    height: 400px;
    margin: 0% 5% 0% 5%;

`

const ContainerStyles = styled.div`
    padding:2%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    
`

const Photo = props => {
    const { photo } = props

    return (
        <ContainerStyles className="image-container">
        <PhotoStyles className="mars" alt="" src={photo.img_src} />
        <PhotoFooter name={photo.rover.name} full_name={photo.camera.full_name} date={photo.earth_date}/>
        </ContainerStyles>
    )
};

export default Photo