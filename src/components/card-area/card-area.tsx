import { FC, Fragment } from 'react'
import Slider from "react-slick";
import { LogoTeams } from '../../images'
import { CardAreaStyled } from './styled'
import { PlayersAndTeams, TeamsBattleProps, TeamsData } from '../../types/teams-and-players'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



type CardAreaProps = {
    selectTeamToBattle: (itemTitle: string, itemValue: number, team: TeamsData) => void
    teamsAndPlayer: PlayersAndTeams
}

type TeamBattleRowProps = {
    itemTitle: string
    itemValue: number
    selectTeamToBattle: (itemTitle: string, itemValue: number, team: TeamsData) => void,
    team: TeamsData
}

const TeamBattleRow: FC<TeamBattleRowProps> = ({ itemTitle, itemValue, team, selectTeamToBattle }) => (
    <CardAreaStyled.TeamBattlePropsRow onClick={() => selectTeamToBattle(itemTitle, itemValue, team)}>
        <p>{itemTitle}</p>
        <p>{itemValue}</p>
    </CardAreaStyled.TeamBattlePropsRow>
)

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const CardArea: FC<CardAreaProps> = ({ teamsAndPlayer, selectTeamToBattle }) => (
    <CardAreaStyled.Container>
        <CardAreaStyled.SliderTeamsContainer>
            <Slider  {...settings}>
                {teamsAndPlayer.teams.map((team, key) => (
                    <Fragment key={`${key}-${team.team_name}`}>
                        <CardAreaStyled.TeamLogo
                            alt={`${team.image_name} logo`}
                            key={`${team.image_name}`}
                            src={LogoTeams[team.image_name]}
                        />
                        <CardAreaStyled.CardTeam>
                            <CardAreaStyled.TeamData>
                                <CardAreaStyled.TeamName>{team.team_name}</CardAreaStyled.TeamName>
                                <CardAreaStyled.TeamBattlePropsContainer>
                                    {Object.keys(team.teams_battle_props).map((itemTitle) => (
                                        <TeamBattleRow
                                            key={itemTitle.concat(team.team_name)}
                                            itemTitle={itemTitle}
                                            itemValue={team.teams_battle_props[itemTitle as keyof TeamsBattleProps]}
                                            team={team}
                                            selectTeamToBattle={selectTeamToBattle}
                                        />
                                    ))}
                                </CardAreaStyled.TeamBattlePropsContainer>
                            </CardAreaStyled.TeamData>
                        </CardAreaStyled.CardTeam>
                    </Fragment>
                ))}
            </Slider>
        </CardAreaStyled.SliderTeamsContainer>
    </CardAreaStyled.Container>
)
export default CardArea