import React from 'react'
import '../../index.scss'
import styled from 'styled-components'

const ColorWhite = styled.h1`
    
    color: white;
    font-size: 30px;
    font-family: Bahnscrift;
`;


const BASE_URL = "https://www.youtube.com/embed/nvl4tV1bWNk"



const Youtube = () => {

    return(
        <div>
            <ColorWhite>Bambina - Papillon</ColorWhite>
            <iframe src={`${BASE_URL}`}/>
            <ColorWhite>Ep Bientôt disponible !</ColorWhite>
        </div>
    )
}

export default Youtube