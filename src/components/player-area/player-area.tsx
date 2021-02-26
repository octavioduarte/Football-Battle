import { FC, Fragment } from 'react'
import { PlayerStyled } from './styled'
import CardArea from '../card-area/card-area'
import { PlayersAndTeams } from '../../types/teams-and-players'


type PlayerAreaProps = {
    teamsAndPlayers: PlayersAndTeams[]
}

const PlayerArea: FC<PlayerAreaProps> = ({ teamsAndPlayers }) => {
    return (
        <PlayerStyled.Container>
            {teamsAndPlayers.map((item, key) => (
                <Fragment key={key}>
                    <CardArea teamsAndPlayer={item} />
                </Fragment>
            ))}
        </PlayerStyled.Container>

    )
}


export default PlayerArea