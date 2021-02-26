import { LogoTeamsType } from '../images'

export type PlayersAndTeams = {
    player_name: string
    teams: TeamsData[]
}

export type TeamsData = {
    image_name: keyof LogoTeamsType
    team_name: string
}