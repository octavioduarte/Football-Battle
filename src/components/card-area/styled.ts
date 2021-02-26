import styled from 'styled-components'


const Container = styled.div`
    border: 1px solid gray;
    border-radius: 15px;
    height: 75vh;
    margin: 50px auto;
    width: 555px;
`

const PlayerName = styled.h4`
    font-size: 1.2em;
    font-weight: 900;
    margin: 15px 0;
    text-transform: uppercase;
`

export const CardAreaStyled = {
    Container,
    PlayerName
}