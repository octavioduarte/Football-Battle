import { PlayersAndTeams } from "./types/teams-and-players";

export const Mock: PlayersAndTeams[] = [
    {
        player_name: 'Octávio Augusto',
        teams: [
            {
                image_name: 'CelticLogo',
                team_name: 'Celtic',
                teams_battle_props: {
                    attack: 74,
                    continental: 1,
                    crowd: 11.2,
                    defense: 72
                }
            },
            {
                image_name: 'CorinthiansLogo',
                team_name: 'Corinthians',
                teams_battle_props: {
                    attack: 69,
                    continental: 1,
                    crowd: 38.2,
                    defense: 74
                }
            }
        ]
    },
    {
        player_name: 'Augusto Octávio',
        teams: [
            {
                image_name: 'BorussiaLogo',
                team_name: 'Borussia',
                teams_battle_props: {
                    attack: 82,
                    continental: 1,
                    crowd: 9.3,
                    defense: 75
                }
            },
            {
                image_name: 'SantosLogo',
                team_name: 'Santos',
                teams_battle_props: {
                    attack: 72,
                    continental: 2,
                    crowd: 5.2,
                    defense: 70
                }
            }
        ]
    }
]