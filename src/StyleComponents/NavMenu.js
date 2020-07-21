import React from 'react'
import styled from 'styled-components'

const NavMenuStyles = styled.nav`
display:flex;
justify-content:space-evenly;
padding: 2%;
border-bottom: 5px solid black;
background-color: antiquewhite;

    a {
        font-size: 1.5rem;
        color:antiquewhite;
        text-decoration: none;
        text-align: center;
        padding:1%;
        background-color: black;
        border: 2px solid black;
        border-radius: 5%;
    }
`


const NavMenu = props => {

    return (
        <NavMenuStyles>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Search">Search</a>
            <a href="#Contact">Contact</a>
        </NavMenuStyles>
    )
}

export default NavMenu