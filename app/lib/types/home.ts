export type GetMyProfileResponse = {
    user: {
        id: string;
      email: string
      username: string
      full_name: string
      division: string
      xp: number
      level: number
    },
    wallet: {
         balance: number
      total_won:number
    }
}