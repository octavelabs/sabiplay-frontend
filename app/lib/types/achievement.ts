export type Achievement = {
        id: string;
        user_id: string;
        badge_slug: string
        earned_at: string
}

export type ListAchievementsResponse = {
    achievements: Achievement[]
}