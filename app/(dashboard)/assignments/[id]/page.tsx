"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

type AssignmentType = {
    _id: string;
    schoolName: string;
    subject: string;
    class: string;
    time: string;
    totalMarks: number;
    instructions: string[];
    sections: {
        title: string;
        questions: {
            question: string;
            options?: string[];
            marks?: string;
            difficulty?: string;
        }[];
    }[];
};

type SettingsType = {
    schoolName: string;
    teacherName: string;
    city: string;
};

export default function AssignmentPage() {

    const params = useParams();

    const [assignment, setAssignment] =
        useState<AssignmentType | null>(null);

    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState<SettingsType | null>(null);

    const paperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        async function fetchAssignment() {

            try {

                const res = await fetch(
                    `/api/assignments/${params.id}`
                );

                const data = await res.json();

                if (data.success) {
                    setAssignment(data.assignment);
                }

                // SETTINGS FETCH

                const settingsRes =
                    await fetch("/api/settings");

                const settingsData =
                    await settingsRes.json();

                if (settingsData.success) {
                    setSettings(settingsData.settings);
                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        }

        fetchAssignment();

    }, [params.id]);



    const downloadPDF = async () => {

        if (!paperRef.current || !assignment) return;

        const html2pdf =
            (await import("html2pdf.js")).default;

        const element = paperRef.current;

        const options = {

            margin: 0.5,

            filename:
                `${assignment.subject}-assignment.pdf`,

            image: {
                type: "jpeg" as const,
                quality: 1,
            },

            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            },

            jsPDF: {
                unit: "in" as const,
                format: "a4" as const,
                orientation: "portrait" as const,
            },
        };

        html2pdf()
            .set(options)
            .from(element)
            .save();
    };



    if (loading) {

        return (
            <div className="p-10 text-2xl">
                Loading...
            </div>
        );
    }

    if (!assignment) {

        return (
            <div className="p-10 text-3xl text-black font-bold">
                Assignment Not Found
            </div>
        );
    }

    return (

        <div
            className="
                h-[calc(100vh-120px)]
                overflow-y-auto
                pr-2
            "
        >

            {/* HEADER */}

            <div
                className="
                    bg-[#1E1E1E]
                    rounded-[30px]
                    p-6
                    text-white
                    mb-6
                "
            >

                <h2
                    className="
                        text-2xl
                        font-semibold
                        mb-4
                    "
                >
                    Certainly! Here is your customized question paper.
                </h2>

                <button
                    onClick={downloadPDF}
                    className="
                        bg-white
                        text-black
                        px-6
                        py-3
                        rounded-full
                        cursor-pointer
                        font-medium
                        hover:scale-105
                        transition-all
                    "
                >
                    Download as PDF
                </button>

            </div>



            {/* PAPER */}

            <div
                ref={paperRef}
                className="
                    pdf-content
                    bg-white
                    text-black
                    rounded-[40px]
                    max-w-5xl
                    mx-auto
                    p-14
                    shadow-sm
                "
            >

                {/* TOP */}

                <div className="text-center mb-16">

                    <h1
                        className="
                            text-6xl
                            font-bold
                            mb-5
                        "
                    >
                        {settings?.schoolName || assignment.schoolName}
                    </h1>

                    <h2
                        className="
                            text-4xl
                            font-semibold
                            mb-3
                        "
                    >
                        Subject: {assignment.subject}
                    </h2>

                    <h3 className="text-3xl">
                        Class: {assignment.class}
                    </h3>

                </div>



                {/* INFO */}

                <div
                    className="
                        flex
                        justify-between
                        text-2xl
                        mb-16
                    "
                >

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

                <div
                    className="
                        mb-16
                        space-y-5
                        text-xl
                    "
                >

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

                <div className="mb-20">

                    <h2
                        className="
                            text-5xl
                            font-bold
                            mb-8
                        "
                    >
                        Instructions
                    </h2>

                    <ul
                        className="
                            list-disc
                            pl-8
                            space-y-4
                            text-xl
                        "
                    >

                        {assignment.instructions?.map(
                            (item, index) => (

                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>



                {/* SECTIONS */}

                {assignment.sections?.map(
                    (section, index) => (

                        <div
                            key={index}
                            className="mb-20"
                        >

                            <h2
                                className="
                                    text-5xl
                                    font-bold
                                    mb-10
                                    border-b
                                    border-black
                                    pb-4
                                "
                            >

                                {section.title}

                            </h2>

                            <div className="space-y-14">

                                {section.questions?.map(
                                    (q, i) => (

                                        <div
                                            key={i}
                                            className="
                                                border-b
                                                border-[#E5E5E5]
                                                pb-10
                                            "
                                        >

                                            <p
                                                className="
                                                    text-2xl
                                                    font-semibold
                                                    leading-relaxed
                                                    mb-6
                                                "
                                            >

                                                {i + 1}.
                                                {" "}
                                                {q.question}

                                            </p>

                                            {
                                                q.options && (

                                                    <div
                                                        className="
                                                            space-y-4
                                                            pl-6
                                                            text-xl
                                                        "
                                                    >

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
                                                                    {
                                                                        String.fromCharCode(
                                                                            65 + optionIndex
                                                                        )
                                                                    }
                                                                    )
                                                                    {" "}
                                                                    {option}
                                                                </p>
                                                            )
                                                        )}

                                                    </div>
                                                )
                                            }

                                            <div
                                                className="
                                                    flex
                                                    gap-6
                                                    mt-8
                                                    text-lg
                                                    text-gray-500
                                                "
                                            >

                                                {
                                                    q.marks && (
                                                        <span>
                                                            {q.marks} Marks
                                                        </span>
                                                    )
                                                }

                                                {
                                                    q.difficulty && (
                                                        <span>
                                                            {q.difficulty}
                                                        </span>
                                                    )
                                                }

                                            </div>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>
                    )
                )}

            </div>

        </div>
    );
}