"use client";

import Image from "next/image";
import Link from "next/link";

import {
    useEffect,
    useState,
} from "react";

type AssignmentType = {
    _id: string;
    schoolName: string;
    subject: string;
    class: string;
    createdAt: string;
};

export default function AssignmentsPage() {

    const [assignments, setAssignments] =
        useState<AssignmentType[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [openMenu, setOpenMenu] =
        useState<string | null>(null);

    useEffect(() => {

        async function fetchAssignments() {

            try {

                const res =
                    await fetch("/api/assignments");

                const data =
                    await res.json();

                if (data.success) {

                    setAssignments(
                        data.assignments
                    );
                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        }

        fetchAssignments();

    }, []);

    async function handleDelete(
        id: string
    ) {

        const confirmDelete =
            confirm(
                "Delete this assignment?"
            );

        if (!confirmDelete) return;

        try {

            const res =
                await fetch(
                    `/api/assignments/${id}`,
                    {
                        method: "DELETE",
                    }
                );

            const data =
                await res.json();

            if (data.success) {

                setAssignments((prev) =>
                    prev.filter(
                        (assignment) =>
                            assignment._id !== id
                    )
                );
            }

        } catch (error) {

            console.log(error);
        }
    }

    const filteredAssignments =
        assignments.filter(
            (assignment) =>
                assignment.subject
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    if (loading) {

        return (

            <div className="
                w-full
                h-full
                flex
                items-center
                justify-center
            ">

                <h1 className="
                    text-3xl
                    font-bold
                ">
                    Loading...
                </h1>

            </div>
        );
    }

    return (

        <div className="
            w-full
            h-full
            overflow-y-auto
            px-8
            py-6
        ">

            {/* HEADER */}

            <div className="
                flex
                items-center
                justify-between
                mb-8
            ">

                <div>

                    <h1 className="
                        text-[52px]
                        font-bold
                        text-[#2D2D2D]
                    ">
                        Assignments
                    </h1>

                    <p className="
                        text-gray-500
                        text-lg
                        mt-1
                    ">
                        Manage and create assignments for your classes.
                    </p>

                </div>

                {/* SEARCH */}

                <input
                    type="text"
                    placeholder="Search Assignment"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="
                        w-[280px]
                        bg-white
                        border
                        border-[#E5E5E5]
                        rounded-full
                        text-black
                        px-5
                        py-3
                        outline-none
                        text-sm
                    "
                />

            </div>

            {/* EMPTY STATE */}

            {
                filteredAssignments.length === 0 && (

                    <div className="
                        w-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        mt-20
                    ">

                        <Image
                            src="/empty.png"
                            alt="No assignments"
                            width={250}
                            height={250}
                        />

                        <h1 className="
                            text-3xl
                            font-bold
                            mt-6
                            text-[#2D2D2D]
                        ">
                            No matching assignments
                        </h1>

                    </div>
                )
            }

            {/* GRID */}

            <div className="
                grid
                grid-cols-2
                gap-6
            ">

                {
                    filteredAssignments.map(
                        (assignment) => (


                            <div
                                key={assignment._id}
                                className="
        bg-white
        rounded-[30px]
        p-6
        shadow-sm
        border
        border-[#ECECEC]
        min-h-[220px]
        flex
        flex-col
        justify-between
        relative
    "
                            >

                                {/* TOP */}

                                <div className="flex items-start justify-between">

                                    <h2 className="
            text-[28px]
            font-bold
            text-[#2D2D2D]
            leading-tight
        ">
                                        {assignment.subject}
                                    </h2>

                                    {/* MENU */}

                                    <div className="relative">

                                        <button
                                            onClick={(e) => {

                                                e.stopPropagation();

                                                setOpenMenu(
                                                    openMenu === assignment._id
                                                        ? null
                                                        : assignment._id
                                                );
                                            }}
                                            className="
                    text-gray-400
                    text-2xl
                    rotate-90
                "
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
                            p-2
                            z-50
                            w-[170px]
                            border
                        "
                                                >

                                                    <Link
                                                        href={`/assignments/${assignment._id}`}
                                                        className="
                                block
                                w-full
                                text-left
                                px-4
                                py-2
                                rounded-xl
                                hover:bg-[#F5F5F5]
                                text-black
                            "
                                                    >
                                                        View
                                                    </Link>

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                assignment._id
                                                            )
                                                        }
                                                        className="
                                w-full
                                text-left
                                px-4
                                py-2
                                rounded-xl
                                hover:bg-red-50
                                text-red-500
                            "
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            )
                                        }

                                    </div>

                                </div>

                                {/* MIDDLE */}

                                <div className="
        flex
        items-center
        justify-between
        mt-10
    ">

                                    <div>

                                        <p className="
                text-gray-500
                text-lg
            ">
                                            Assigned on :
                                            {" "}
                                            {
                                                new Date(
                                                    assignment.createdAt
                                                ).toLocaleDateString(
                                                    "en-GB"
                                                )
                                            }
                                        </p>

                                    </div>

                                    <div>

                                        <p className="
                text-gray-500
                text-lg
            ">
                                            Class :
                                            {" "}
                                            {assignment.class}th
                                        </p>

                                    </div>

                                </div>

                                {/* BUTTON */}

                                <div className="mt-8">

                                    <Link
                                        href={`/assignments/${assignment._id}`}
                                        className="
                inline-flex
                items-center
                justify-center
                bg-black
                text-white
                px-6
                py-3
                rounded-full
                hover:scale-105
                transition-all
            "
                                    >
                                        View Assignment
                                    </Link>

                                </div>

                            </div>


                        )
                    )
                }

            </div>

        </div>
    );
}