export type ListLeaderboardParams = {
    period?: 'national' | 'daily' | 'weekly' | 'campus' ;
    university?: string;
    limit?: number
}

export type Leaderboard = {
        id: string
        username: string
        full_name: string
        division: string
        total_points: number
        rank: number
        avatar_url: string
}

export type ListLeaderboardResponse = {
    leaderboard: Leaderboard[]
}