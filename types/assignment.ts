export type QuestionType = {
    id: number;
    type: string;
    questions: number;
    marks: number;
};

export type AssignmentFormData = {
    dueDate: string;
    instructions: string;
    questionTypes: QuestionType[];
};