import React from 'react'
import styled from 'styled-components'

const PageFooterStyles = styled.footer`
display:flex;
flex-direction:column;
border-top: 5px solid antiquewhite;
background-color: black;

    h2 {
        font-size:1.5rem;
        font-style: italic;
        padding: 2%;
        text-decoration: underline;
    }

    p {
        font-size: 1rem;
        font-style: italic;
        padding:0% 2%;
    }

    a {
        font-size: 1rem;
        font-style: italic;
        padding:1% 2%;
        text-decoration: none;
        color: antiquewhite;
    }
`


const PageFooter = props => {

    return (
        <PageFooterStyles>
            <h2>Contact</h2>
            <p>Mars Mendes</p>
            <p>Fullstack Web Developer</p>
            <p>Lambda School</p>
            <p>mdmbusiness2@gmail.com</p>
            <a href="https://github.com/MMendes24">Github</a>
        </PageFooterStyles>
    )
}

export default PageFooter