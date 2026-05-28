"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoreVertical } from "lucide-react";

type AssignmentType = {
    _id: string;
    subject: string;
    class: string;
    createdAt: string;
};

export default function AssignmentsPage() {

    const [assignments, setAssignments] = useState<AssignmentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const filteredAssignments = assignments.filter((assignment) =>
        assignment.subject
            .toLowerCase()
            .includes(search.toLowerCase())
    );

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


    async function deleteAssignment(id: string) {

        try {

            const res = await fetch(`/api/assignments/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (data.success) {

                const updatedAssignments = assignments.filter(
                    (assignment) => assignment._id !== id
                );

                setAssignments(updatedAssignments);
            }

        } catch (error) {

            console.log(error);
        }
    }

    if (loading) {

        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-2xl font-semibold">
                    Loading...
                </p>
            </div>
        );
    }

    return (

        <div className="w-full h-screen overflow-y-auto px-10 py-8">

            {/* TOP SECTION */}

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-[60px] font-bold text-[#2D2D2D] leading-none">
                        Assignments
                    </h1>

                    <p className="text-[#7A7A7A] text-[22px] mt-3">
                        Manage and create assignments for your classes.
                    </p>
                </div>

                {/* SEARCH */}

                <input
                    type="text"
                    placeholder="Search Assignment"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[340px] h-[56px] rounded-full border text-black border-[#E5E5E5] bg-white px-6 outline-none text-[17px]"
                />
            </div>

            {/* NO ASSIGNMENTS */}

            {
                assignments.length === 0 && (

                    <div className="w-full h-[70vh] flex items-center justify-center">

                        <div className="flex flex-col items-center text-center">

                            <Image
                                src="/empty.png"
                                alt="No assignments"
                                width={300}
                                height={300}
                                className="object-contain"
                            />

                            <h1 className="text-[42px] font-bold text-[#2D2D2D] mt-4">
                                No assignments yet
                            </h1>

                            <p className="text-[#7A7A7A] max-w-[520px] mt-3 text-[18px] leading-relaxed">
                                Create your first assignment to start collecting
                                and grading student submissions.
                            </p>

                            <Link href="/assignments/create">

                                <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition-all">
                                    + Create Your First Assignment
                                </button>

                            </Link>
                        </div>
                    </div>
                )
            }

            {/* NO MATCHING RESULTS */}

            {
                assignments.length > 0 &&
                filteredAssignments.length === 0 && (

                    <div className="w-full h-[70vh] flex items-center justify-center">

                        <div className="flex flex-col items-center text-center">

                            <Image
                                src="/empty.png"
                                alt="No results"
                                width={260}
                                height={260}
                                className="object-contain opacity-80"
                            />

                            <h1 className="text-[40px] font-bold text-[#2D2D2D] mt-4">
                                No matching assignments
                            </h1>

                            <p className="text-[#7A7A7A] mt-3 text-[18px]">
                                Try searching with another keyword.
                            </p>
                        </div>
                    </div>
                )
            }

            {/* ASSIGNMENT CARDS */}

            {
                filteredAssignments.length > 0 && (

                    <div className="grid grid-cols-2 gap-6 mt-10 pb-10">

                        {
                            filteredAssignments.map((assignment) => (

                                <div
                                    key={assignment._id}
                                    className="relative bg-white rounded-[32px] border border-[#ECECEC] shadow-sm p-8 min-h-[230px]"
                                >

                                    {/* 3 DOT MENU */}

                                    <div className="absolute top-7 right-7">

                                        <button
                                            onClick={() =>
                                                setOpenMenu(
                                                    openMenu === assignment._id
                                                        ? null
                                                        : assignment._id
                                                )
                                            }
                                            className="text-gray-500"
                                        >
                                            <MoreVertical size={24} />
                                        </button>

                                        {
                                            openMenu === assignment._id && (

                                                <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-2xl border border-[#ECECEC] w-[180px] overflow-hidden z-50">

                                                    <Link
                                                        href={`/assignments/${assignment._id}`}
                                                    >

                                                        <button className="w-full text-left px-5 py-4 hover:bg-gray-50 text-black">
                                                            View Assignment
                                                        </button>

                                                    </Link>

                                                    <button
                                                        onClick={() =>
                                                            deleteAssignment(
                                                                assignment._id
                                                            )
                                                        }
                                                        className="w-full text-left px-5 py-4 hover:bg-red-50 text-red-500"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>

                                    {/* SUBJECT */}

                                    <h2 className="text-[32px] font-bold text-[#2D2D2D] leading-tight max-w-[80%] break-words">
                                        {assignment.subject}
                                    </h2>

                                    {/* INFO */}

                                    <div className="flex items-end justify-between mt-14">

                                        <div>

                                            <p className="text-[#7A7A7A] text-[17px]">
                                                Assigned on :
                                                {" "}
                                                {new Date(
                                                    assignment.createdAt
                                                ).toLocaleDateString()}
                                            </p>

                                            <Link
                                                href={`/assignments/${assignment._id}`}
                                            >

                                                <button className="mt-5 bg-black text-white px-6 py-3 rounded-full text-[16px] hover:scale-105 transition-all">
                                                    View Assignment
                                                </button>

                                            </Link>
                                        </div>

                                        <div className="text-right">

                                            <p className="text-[#7A7A7A] text-[17px]">
                                                Class : {assignment.class}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}