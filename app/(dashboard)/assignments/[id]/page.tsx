import connectDB from "@/lib/connectDB";
import Assignment from "@/models/Assignment";

type PageProps = {
    params: Promise<{ id: string; }>;
};

export default async function AssignmentPage({ params, }: PageProps) {
    await connectDB();
    const { id } = await params;
    const assignment = await Assignment.findById(id).lean();
    if (!assignment) {
        return (
            <div className="p-10">
                <h1 className="text-3xl font-bold">
                    Assignment Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="p-6 text-black">
            {/* BLACK HEADER */}
            <div className="bg-[#1e1e1e] rounded-3xl p-6 text-white mb-6">
                <h2 className="text-xl font-semibold mb-4">
                    Certainly! Here is your customized question paper.
                </h2>

                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
                    Download as PDF
                </button>
            </div>

            {/* QUESTION PAPER */}
            <div className="bg-white rounded-3xl shadow-sm max-w-5xl mx-auto p-10">

                {/* HEADER */}
                <div className="text-center mb-14">

                    <h1 className="text-5xl font-bold mb-4">
                        {assignment.schoolName}
                    </h1>

                    <h2 className="text-3xl font-semibold mb-3">
                        Subject: {assignment.subject}
                    </h2>

                    <h3 className="text-2xl">
                        Class: {assignment.class}
                    </h3>

                </div>

                {/* INFO */}
                <div className="
                flex
                justify-between
                text-xl
                mb-14
                ">

                    <p>
                        Time Allowed: {assignment.time}
                    </p>

                    <p>
                        Maximum Marks:
                        {" "}
                        {assignment.totalMarks}
                    </p>

                </div>

                {/* STUDENT DETAILS */}
                <div className="
                mb-16
                space-y-3
                text-lg
                ">

                    <p>
                        Name: _____________________
                    </p>

                    <p>
                        Roll Number: ______________
                    </p>

                    <p>
                        Section: __________________
                    </p>

                </div>

                {/* INSTRUCTIONS */}
                <div className="mb-16">

                    <h2 className="
                    text-4xl
                    font-bold
                    mb-6
                    ">

                        Instructions

                    </h2>

                    <ul className="
                    list-disc
                    pl-8
                    space-y-3
                    text-lg
                    ">

                        {assignment.instructions?.map(
                            (
                                item: string,
                                index: number
                            ) => (

                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

                {/* SECTIONS */}
                {assignment.sections?.map(
                    (
                        section: {
                            title: string;
                            questions: {
                                question: string;
                                options?: string[];
                                marks?: string;
                                difficulty?: string;
                            }[];
                        },
                        index: number
                    ) => (

                        <div
                            key={index}
                            className="mb-20"
                        >

                            <h2 className="
                            text-4xl
                            font-bold
                            mb-10
                            border-b
                            pb-4
                            ">

                                {section.title}

                            </h2>

                            <div className="space-y-12">

                                {section.questions?.map(
                                    (
                                        q,
                                        i
                                    ) => (

                                        <div
                                            key={i}
                                            className="
                                            border-b
                                            border-[#E5E5E5]
                                            pb-8
                                            "
                                        >

                                            <p className="
                                            text-2xl
                                            font-semibold
                                            leading-relaxed
                                            mb-6
                                            ">

                                                {i + 1}.
                                                {" "}
                                                {q.question}

                                            </p>

                                            {q.options && (

                                                <div className="
                                                space-y-4
                                                pl-6
                                                text-xl
                                                mb-6
                                                ">

                                                    {q.options.map(
                                                        (
                                                            option,
                                                            optionIndex
                                                        ) => (

                                                            <p
                                                                key={
                                                                    optionIndex
                                                                }
                                                            >
                                                                {option}
                                                            </p>
                                                        )
                                                    )}

                                                </div>
                                            )}

                                            <div className="
                                            flex
                                            gap-6
                                            text-[#7A7A7A]
                                            text-lg
                                            mt-4
                                            ">

                                                {q.marks && (

                                                    <p>
                                                        {q.marks} Marks
                                                    </p>
                                                )}

                                                {q.difficulty && (

                                                    <p>
                                                        {q.difficulty}
                                                    </p>
                                                )}

                                            </div>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>
                    )
                )}

                {/* ANSWERS */}
                {assignment.answers && (

                    <div className="mt-24">

                        <h2 className="
                        text-4xl
                        font-bold
                        mb-10
                        border-b
                        pb-4
                        ">

                            Answer Key

                        </h2>

                        <div className="
                        space-y-8
                        text-xl
                        leading-relaxed
                        ">

                            {assignment.answers.map(
                                (
                                    answer: {
                                        question: string;
                                        answer: string;
                                    },
                                    index: number
                                ) => (

                                    <div key={index}>

                                        <p className="
                                        font-semibold
                                        mb-2
                                        ">

                                            {index + 1}.
                                            {" "}
                                            {answer.question}

                                        </p>

                                        <p className="text-[#444]">
                                            {answer.answer}
                                        </p>

                                    </div>
                                )
                            )}

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}