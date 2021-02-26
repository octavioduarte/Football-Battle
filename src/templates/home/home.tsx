import { FC } from 'react'
import { HomeStyled } from './styled'
import { Mock } from '../../mock'
import PlayerArea from '../../components/player-area/player-area'


const HomeTemplate: FC = () => (
    <HomeStyled.ContainerHome>
        <HomeStyled.TitleGame>Football Battle</HomeStyled.TitleGame>
        <PlayerArea teamsAndPlayers={Mock} />
    </HomeStyled.ContainerHome>
)

export default HomeTemplate