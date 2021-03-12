import styled from 'styled-components'




const Container = styled.div`
    height: 30vh;
    margin: 50px auto 0;
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
    margin-top: 400px;
`

const CardTeam = styled.div`
    display: flex;
    height: 200px;
    padding: 25px;
`

const TeamData = styled.div`
    width: 100%;
`
const TeamLogo = styled.img`
    height: 75px;
    margin: auto;
    width: 90px;
`

const TeamName = styled.p`
    font-family: 'DotGothic16', sans-serif;
    text-align: center;
    text-transform: uppercase;
`

const TeamBattlePropsContainer = styled.ul`
    cursor: pointer;
    text-align: left;
    padding-left: 15px;
    width: 495px;
`

const TeamBattlePropsRow = styled.li`
    display: flex;
    font-family: 'DotGothic16', sans-serif;
    justify-content: space-between;
    margin-top: 6px;
    text-transform: uppercase;

    &:hover {
        background: #d6d3d3;
    }
`

export const CardAreaStyled = {
    CardTeam,
    Container,
    PlayerName,
    SliderTeamsContainer,
    TeamBattlePropsContainer,
    TeamBattlePropsRow,
    TeamData,
    TeamLogo,
    TeamName
}