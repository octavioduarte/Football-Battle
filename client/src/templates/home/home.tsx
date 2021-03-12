import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { HomeStyled } from './styled'
import { Requests } from '../../services/http/requests'
import { PlayersAndTeams } from '../../types/teams-and-players'
import PlayerArea from '../../components/player-area/player-area'



const HomeTemplate: FC = () => {
    const [teams, setTeams] = useState<PlayersAndTeams[] | null>(null)


    const requests = useMemo(() => new Requests(), [])

    const fetchTeams = useCallback(async () => {
        const { data, success } = await requests.getAllTeams()
        if (success) {
            setTeams(data)
        }
    }, [requests])


    useEffect(() => {
        fetchTeams()
    }, [fetchTeams])

    return (
        <HomeStyled.ContainerHome>
            <HomeStyled.TitleGame>Football Battle</HomeStyled.TitleGame>
            {teams &&
                <PlayerArea teamsAndPlayers={teams} />
            }
        </HomeStyled.ContainerHome>
    )
}

export default HomeTemplate