import { FC } from 'react'
import { PlayersAndTeams } from '../../types/teams-and-players'
import { CardAreaStyled } from './styled'


type CardAreaProps = {
    teamsAndPlayer: PlayersAndTeams
}

const CardArea: FC<CardAreaProps> = ({ teamsAndPlayer }) => (
    <CardAreaStyled.Container>{teamsAndPlayer.player_name}</CardAreaStyled.Container>
)

export default CardArea