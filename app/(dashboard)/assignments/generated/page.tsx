"use client";

import { useState } from "react";

type Question = {
    question: string;
    options?: string[];
    marks?: string;
    difficulty?: string;
};

type Section = {
    title: string;
    questions: Question[];
};

type Answer = {
    question: string;
    answer: string;
};

type Assignment = {
    schoolName: string;
    subject: string;
    class: string;
    time: string;
    totalMarks: string;
    instructions: string[];
    sections: Section[];
    answers?: Answer[];
};

export default function GeneratedAssignmentPage() {

    const [assignment] =
        useState<Assignment | null>(() => {

            if (typeof window === "undefined") {
                return null;
            }

            try {

                const stored =
                    localStorage.getItem(
                        "generatedAssignment"
                    );

                return stored
                    ? JSON.parse(stored)
                    : null;

            } catch (error) {

                console.log(error);

                return null;
            }
        });

    if (!assignment) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <h1 className="text-3xl font-bold">
                    No Assignment Found
                </h1>

            </div>
        );
    }

    return (

        <div className="p-6 bg-[#ECECEC] min-h-screen">

            {/* BLACK AI HEADER */}
            <div className="
            bg-[#1F1F1F]
            text-white
            rounded-[30px]
            p-8
            mb-6
            ">

                <h2 className="text-2xl font-semibold leading-relaxed">

                    Certainly! Here is your customized question paper.

                </h2>

                <button className="
                mt-6
                bg-white
                text-black
                px-6
                py-3
                rounded-full
                font-medium
                ">

                    Download as PDF

                </button>

            </div>

            {/* QUESTION PAPER */}
            <div className="
            max-w-5xl
            mx-auto
            bg-white
            rounded-[35px]
            shadow-lg
            p-14
            text-black
            ">

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

                {/* PAPER INFO */}
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
                        Maximum Marks: {assignment.totalMarks}
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
                                    (q, i) => (

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

                                                {i + 1}. {q.question}

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
                                (answer, index) => (

                                    <div key={index}>

                                        <p className="
                                        font-semibold
                                        mb-2
                                        ">

                                            {index + 1}. {answer.question}

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