import { FC } from 'react'
import { LogoTeams } from '../../images';
import { TeamsData } from '../../types/teams-and-players';
import { PropsBattleState } from '../player-area/player-area';
import { SelectedTeamAreaStyled } from './styled'


type SelectedTeamAreaProps = {
    propsBattle: PropsBattleState,
    teamData: TeamsData | null,
    teamSelected: boolean
}



const SelectedTeamArea: FC<SelectedTeamAreaProps> = ({ propsBattle, teamData, teamSelected }) => (
    <SelectedTeamAreaStyled.ContainerSelectedTeam>
        {teamSelected && teamData ?
            <>
                <SelectedTeamAreaStyled.ContainerLogoOfSelectedTeam>
                    <SelectedTeamAreaStyled.ImageSelected
                        alt={`${teamData.team_name} logo`}
                        key={`${teamData.image_name}`}
                        src={LogoTeams[teamData.image_name]}
                    />
                </SelectedTeamAreaStyled.ContainerLogoOfSelectedTeam>

                <SelectedTeamAreaStyled.PropsBattleText>
                    {propsBattle.propTitle} : {propsBattle.propValue}
                </SelectedTeamAreaStyled.PropsBattleText>
            </>
            :
            <SelectedTeamAreaStyled.WithoutSelectedTeam>
                Select a team
                </SelectedTeamAreaStyled.WithoutSelectedTeam>
        }
    </SelectedTeamAreaStyled.ContainerSelectedTeam>
)


export default SelectedTeamArea;