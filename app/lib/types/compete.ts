

export type ListCompetitionsParams = {
    type?: 'league' | 'cup' | 'mini-cup' | 'daily' | 'battle'
}

export type Competition = {
    id: string
    name: string;
    type: string;
    tier: string;
    entry_fee: number;
    prize_pool: number;
    max_players: number;
    status: string;
    category: string[],
    winner_id: string,
    starts_at: string,
    ends_at: string,
    created_at: string,
    entry_count: number
}

export type ListCompetitonResponse = {
    competitions: Competition[]
}
export type JoinCompetitonRequest = {
    competitonId: string
}

export type JoinCompetitionResponse = {
    newBalance: number
    txRef: string
}