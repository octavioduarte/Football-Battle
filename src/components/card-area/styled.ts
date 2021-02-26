import styled from 'styled-components'




const Container = styled.div`
    border: 1px solid gray;
    border-radius: 15px;
    height: 75vh;
    margin: 50px auto;
    position: relative;
    width: 555px;
`


const PlayerName = styled.h4`
    font-size: 1.2em;
    font-weight: 900;
    margin: 15px 0;
    text-transform: uppercase;
`

const SliderTeamsContainer = styled.div`
    margin-top: 490px;
`

const CardTeam = styled.div`
    display: flex;
    height: 150px;
    padding: 25px;
`

const TeamData = styled.div`
    width: 75%;
`
const TeamLogo = styled.img`
    height: 75px;
    width: 90px;
`

const TeamName = styled.p`
    font-family: 'DotGothic16', sans-serif;
    text-align: center;
    text-transform: uppercase;
`

export const CardAreaStyled = {
    CardTeam,
    Container,
    PlayerName,
    SliderTeamsContainer,
    TeamData,
    TeamLogo,
    TeamName
}