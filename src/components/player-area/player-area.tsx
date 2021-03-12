import { FC, useState } from 'react'
import { PlayerStyled } from './styled'
import CardArea from '../card-area/card-area'
import TeamSelectedArea from '../selected-team-area/selected-team-area'
import { PlayersAndTeams, TeamsData } from '../../types/teams-and-players'


type PlayerAreaProps = {
    teamsAndPlayers: PlayersAndTeams[]
}

export type PropsBattleState = {
    propTitle: string
    propValue: number
}

const PlayerArea: FC<PlayerAreaProps> = ({ teamsAndPlayers }) => {
    const [hasTeamSelected, setHasTeamSelected] = useState<boolean>(false)
    const [teamSelectedData, setTeamSelectedData] = useState<TeamsData | null>(null)
    const [propsBattle, setPropsBattle] = useState<PropsBattleState>({ propTitle: '', propValue: 0 })

    const selectTeamToBattle = (itemTitle: string, itemValue: number, team: TeamsData) => {
        setHasTeamSelected(true)
        setTeamSelectedData(team)
        setPropsBattle({
            propTitle: itemTitle,
            propValue: itemValue
        })
    }

    return (
        <PlayerStyled.Container>
            {teamsAndPlayers.map((item, key) => (
                <PlayerStyled.PlayerCard key={key}>
                    <PlayerStyled.PlayerName>{item.player_name}</PlayerStyled.PlayerName>
                    <TeamSelectedArea
                        teamData={teamSelectedData}
                        teamSelected={hasTeamSelected}
                        propsBattle={propsBattle}
                    />
                    <CardArea teamsAndPlayer={item} selectTeamToBattle={selectTeamToBattle} />
                </PlayerStyled.PlayerCard>
            ))}
        </PlayerStyled.Container>

    )
}


export default PlayerArea