import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

type QuestionType = {
    type: string;
    count: number;
    marks: number;
};

type RequestBody = {

    subject: string;

    class: string;

    dueDate: string;

    instructions: string;

    questionTypes: QuestionType[];
};

export async function POST(req: Request) {

    try {

        const body: RequestBody =
            await req.json();

        const {

            subject,

            class: className,

            dueDate,

            instructions,

            questionTypes,

        } = body;

        const formattedQuestions =
            questionTypes
                .map(
                    (q) =>
                        `${q.type}: ${q.count} questions (${q.marks} marks each)`
                )
                .join("\n");

        const prompt = `
You are an AI Question Paper Generator.

Generate a COMPLETE school question paper.

IMPORTANT:
Return ONLY valid JSON.
Do not return markdown.
Do not use backticks.
Do not explain anything.

JSON Structure:

{
  "schoolName": "Delhi Public School",

  "subject": "${subject}",

  "class": "${className}",

  "time": "1 Hour",

  "totalMarks": "20",

  "instructions": [
    "Attempt all questions",
    "Write neatly"
  ],

  "sections": [
    {
      "title": "Multiple Choice Questions",
      "questions": [
        {
          "question": "What does HTML stand for?",
          "options": [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
          ],
          "marks": "1",
          "difficulty": "Easy"
        }
      ]
    }
  ],

  "answers": [
    {
      "question": "What does HTML stand for?",
      "answer": "Hyper Text Markup Language"
    }
  ]
}

Subject:
${subject}

Class:
${className}

Requirements:
${formattedQuestions}

Additional Instructions:
${instructions}

Due Date:
${dueDate}
`;

        const completion =
            await groq.chat.completions.create({

                model: "llama-3.3-70b-versatile",

                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],

                temperature: 0.5,
            });

        const rawResponse =
            completion.choices[0]?.message?.content;

        if (!rawResponse) {

            return Response.json(
                {
                    success: false,
                    message: "No response from AI",
                },
                {
                    status: 500,
                }
            );
        }

        let parsedResult;

        try {

            parsedResult =
                JSON.parse(rawResponse);

        } catch {

            console.log(
                "Invalid JSON:",
                rawResponse
            );

            return Response.json(
                {
                    success: false,
                    message:
                        "AI returned invalid JSON",
                },
                {
                    status: 500,
                }
            );
        }

        return Response.json({

            success: true,

            result: parsedResult,
        });

    } catch (error) {

        console.log(error);

        return Response.json(
            {
                success: false,
                message: "Generation failed",
            },
            {
                status: 500,
            }
        );
    }
}