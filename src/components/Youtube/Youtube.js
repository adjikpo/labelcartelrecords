import React from 'react'
import '../../index.scss'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";

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
            <ColorWhite>Ep disponible le 15 mai</ColorWhite>
            <ColorWhite>Suivez la sur <a href= "https://instagram.com/bambinaofficiel?igshid=14uk6xysfofgo"> Instagram<FaInstagram/></a></ColorWhite>
        </div>
    )
}

export default Youtube