import React from 'react'
import styled from 'styled-components'

const PageHeaderStyles = styled.header`
padding: 3%;
border-bottom: 5px solid antiquewhite;
background-color: black;

    h1 {
        font-size: 5rem;
        padding:2%;
    }

    h2 {
        font-size: 2.5rem;
        font-style: italic;
        padding:2%;    
    }
`


const PageHeader = props => {

    return (
        <PageHeaderStyles>
            <h1>The Martian Gallery</h1>
            <h2>Visions of the Red Planet</h2>
        </PageHeaderStyles>
    )
}

export default PageHeader