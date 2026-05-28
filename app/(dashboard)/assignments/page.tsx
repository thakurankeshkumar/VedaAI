"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AssignmentsPage() {
    type AssignmentType = {
        _id: string;
        schoolName: string;
        subject: string;
        class: string;
        createdAt: string;
    };
    const [assignments, setAssignments] = useState<AssignmentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [openMenu, setOpenMenu] = useState<string | null>(null);


    useEffect(() => {

        async function fetchAssignments() {

            try {

                const res = await fetch("/api/assignments");

                const data = await res.json();

                if (data.success) {
                    setAssignments(data.assignments);
                }

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchAssignments();

    }, []);


    return (

        <div className="w-full h-full overflow-y-auto p-5 bg-[#F6F6F6]">

            {
                loading ? (

                    <div className="w-full h-full flex items-center justify-center">
                        <h1 className="text-2xl font-semibold">
                            Loading...
                        </h1>
                    </div>

                ) : assignments.length === 0 ? (

                    <div className="w-full h-full flex items-center justify-center">

                        <div className="flex flex-col items-center text-center">

                            <Image
                                src="/empty.png"
                                alt="No assignments"
                                width={320}
                                height={320}
                                className="object-contain"
                            />

                            <h1 className="text-[32px] font-bold text-[#2D2D2D] mt-2">
                                No assignments yet
                            </h1>

                            <p className="text-[#7A7A7A] max-w-[520px] mt-3 text-[18px] leading-relaxed">
                                Create your first assignment to start collecting and grading
                                student submissions.
                            </p>

                            <button className="mt-8 bg-[#1F1F1F] hover:scale-105 transition-all text-white px-8 py-4 rounded-full text-lg shadow-lg">
                                + Create Your First Assignment
                            </button>

                        </div>

                    </div>

                ) : (

                    <div>

                        {/* Top Header */}

                        <div className="flex items-center justify-between mb-8">

                            <div>

                                <h1 className="text-3xl font-bold text-[#2D2D2D]">
                                    Assignments
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Manage and create assignments for your classes.
                                </p>

                            </div>

                            <input
                                type="text"
                                placeholder="Search Assignment"
                                className="border rounded-full px-5 py-3 w-[320px] outline-none"
                            />

                        </div>

                        {/* Assignment Cards */}

                        <div className="grid grid-cols-2 gap-4">

                            {assignments.map((assignment) => (

                                <div
                                    key={assignment._id}
                                    className="bg-white rounded-[24px] p-5 border border-[#EAEAEA] shadow-sm hover:shadow-md transition-all min-h-[190px] flex flex-col justify-between"
                                >

                                    {/* Top */}

                                    <div className="flex items-start justify-between">

                                        <h2 className="text-[34px] font-bold text-[#2D2D2D] leading-tight">
                                            {assignment.subject}
                                        </h2>

                                        <div className="relative">

                                            <button
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === assignment._id
                                                            ? null
                                                            : assignment._id
                                                    )
                                                }
                                                className="text-gray-400 text-2xl px-2"
                                            >
                                                ⋮
                                            </button>

                                            {
                                                openMenu === assignment._id && (

                                                    <div
                                                        className="
                    absolute
                    right-0
                    top-10
                    bg-white
                    shadow-xl
                    rounded-2xl
                    border
                    w-[170px]
                    py-2
                    z-50
                "
                                                    >

                                                        <a
                                                            href={`/assignments/${assignment._id}`}
                                                            className="
                        block
                        px-4
                        py-2
                        text-sm
                        text-black
                        hover:bg-gray-100
                        transition-all
                    "
                                                        >
                                                            View Assignment
                                                        </a>

                                                        <button
                                                            className="
                        w-full
                        text-left
                        px-4
                        py-2
                        text-sm
                        text-red-500
                        hover:bg-red-50
                        transition-all
                    "
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                )
                                            }

                                        </div>

                                    </div>

                                    {/* Bottom Info */}

                                    <div className="flex items-end justify-between mt-8">

                                        <div>

                                            <p className="text-[#8A8A8A] text-sm">
                                                Assigned on :
                                                {" "}
                                                <span className="font-medium">
                                                    {
                                                        new Date(
                                                            assignment.createdAt
                                                        ).toLocaleDateString()
                                                    }
                                                </span>
                                            </p>

                                        </div>

                                        <div>

                                            <p className="text-[#8A8A8A] text-sm">
                                                Class :
                                                {" "}
                                                <span className="font-medium">
                                                    {assignment.class}
                                                </span>
                                            </p>

                                        </div>

                                    </div>

                                    {/* Actions */}

                                    <div className="mt-5">

                                        <a
                                            href={`/assignments/${assignment._id}`}
                                            className="bg-black text-white px-5 py-2.5 rounded-full text-sm inline-flex items-center hover:scale-105 transition-all"
                                        >
                                            View Assignment
                                        </a>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                )
            }

        </div>
    );
}