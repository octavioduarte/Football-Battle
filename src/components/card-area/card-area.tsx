import { FC, Fragment } from 'react'
import Slider from "react-slick";
import { LogoTeams } from '../../images'
import { CardAreaStyled } from './styled'
import { PlayersAndTeams } from '../../types/teams-and-players'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



type CardAreaProps = {
    teamsAndPlayer: PlayersAndTeams
}

const CardArea: FC<CardAreaProps> = ({ teamsAndPlayer }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <CardAreaStyled.Container>

            <CardAreaStyled.PlayerName>
                {teamsAndPlayer.player_name}
            </CardAreaStyled.PlayerName>


            <CardAreaStyled.SliderTeamsContainer>
                <Slider  {...settings}>
                    {teamsAndPlayer.teams.map((team, key) => (
                        <Fragment key={`${key}-${team.team_name}`}>
                            <CardAreaStyled.CardTeam>
                                <CardAreaStyled.TeamLogo
                                    alt={`${team.image_name} logo`}
                                    key={`${team.image_name}`}
                                    src={LogoTeams[team.image_name]}
                                />
                                <CardAreaStyled.TeamData>
                                    <CardAreaStyled.TeamName>{team.team_name}</CardAreaStyled.TeamName>
                                </CardAreaStyled.TeamData>
                            </CardAreaStyled.CardTeam>
                        </Fragment>
                    ))}
                </Slider>
            </CardAreaStyled.SliderTeamsContainer>

        </CardAreaStyled.Container>
    )
}
export default CardArea