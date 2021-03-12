import styled from 'styled-components'


const ContainerSelectedTeam = styled.div`
    height: 5vh;
    text-align: center;
    width: 100%;
`

const ImageSelected = styled.img`
    height: 195px;
    width: 170px;
`

const ContainerLogoOfSelectedTeam = styled.section`
    margin: 35px 0;
`


const PropsBattleText = styled.p`
    font-family: 'DotGothic16', sans-serif;
    text-align: center;
    text-transform: uppercase;
`

const WithoutSelectedTeam = styled(PropsBattleText)`
    margin-top: 25px;
`

export const SelectedTeamAreaStyled = {
    ContainerLogoOfSelectedTeam,
    ContainerSelectedTeam,
    ImageSelected,
    PropsBattleText,
    WithoutSelectedTeam
}

