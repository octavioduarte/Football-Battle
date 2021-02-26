import { FC } from 'react'
import Slider from "react-slick";
import { CardAreaStyled } from './styled'
import { PlayersAndTeams } from '../../types/teams-and-players'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



type CardAreaProps = {
    teamsAndPlayer: PlayersAndTeams
}

const CardArea: FC<CardAreaProps> = ({ teamsAndPlayer }) => {
    const settings = {
        dots: true,
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
                        <div key={`${key}-${team.team_name}`}>
                            <h1>{team.team_name}</h1>
                        </div>
                    ))}
                </Slider>
            </CardAreaStyled.SliderTeamsContainer>

        </CardAreaStyled.Container>
    )
}
export default CardArea