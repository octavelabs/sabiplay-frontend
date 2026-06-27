export type ListPracticeQuestionsParams = {
    difficulty?: 'easy' | 'medium' | 'hard';
    category?: string;
    limit?: number
}


export type PracticeQuestion = {
    id: string
    category: string
    difficulty: string
    question_text: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    correct_option: 'a' | 'b' | 'c' | 'd'
    explanation: string
    is_active: boolean
    created_at: string
}

export type ListPracticeQuestionResponse = {
    questions: PracticeQuestion[]
}