import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   padding: 25px 95px;
   width: 100%;
`


const PlayerName = styled.p`
    font-family: 'DotGothic16', sans-serif;
    text-align: center;
    text-transform: uppercase;
`


const PlayerCard = styled.div`
    border: 1px solid gray;
    border-radius: 50px;
    display: block;
    margin-left: 175px;
    padding: 15px 5px;
`




export const PlayerStyled = {
    Container,
    PlayerCard,
    PlayerName
}