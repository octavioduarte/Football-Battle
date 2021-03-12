import { LogoTeamsType } from '../images'

export type PlayersAndTeams = {
    player_name: string
    teams: TeamsData[]
}

export type TeamsData = {
    image_name: keyof LogoTeamsType
    team_name: string   
    teams_battle_props: TeamsBattleProps
}

export type TeamsBattleProps = {
    attack: number
    continental: number
    crowd: number
    defense: number
}