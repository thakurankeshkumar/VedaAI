"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
    MoreVertical,
} from "lucide-react";

type AssignmentType = {
    _id: string;
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

    const filteredAssignments =
        assignments.filter((assignment) =>
            assignment.subject
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    async function deleteAssignment(
        id: string
    ) {

        try {

            const res =
                await fetch(
                    `/ api / assignments / ${id} `,
                    {
                        method: "DELETE",
                    }
                );

            const data =
                await res.json();

            if (data.success) {

                const updatedAssignments =
                    assignments.filter(
                        (assignment) =>
                            assignment._id !== id
                    );

                setAssignments(
                    updatedAssignments
                );
            }

        } catch (error) {

            console.log(error);
        }
    }

    if (loading) {

        return (

            <div className="
                w-full
                h-full
                flex
                items-center
                justify-center
            ">

                <p className="
                    text-xl
                    lg:text-2xl
                    font-semibold
                    text-black
                ">
                    Loading...
                </p>

            </div>
        );
    }

    return (

        <div className="
            w-full
            h-full
            overflow-y-auto
            px-4
            py-4
            sm:px-6
            lg:px-10
            lg:py-8
            pb-32
            lg:pb-8
        ">

            {/* TOP */}

            <div className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-start
                lg:justify-between
            ">

                <div>

                    <h1 className="
                        text-[38px]
                        sm:text-[48px]
                        lg:text-[60px]
                        font-bold
                        text-[#2D2D2D]
                        leading-none
                    ">
                        Assignments
                    </h1>

                    <p className="
                        text-[#7A7A7A]
                        text-[16px]
                        sm:text-[18px]
                        lg:text-[22px]
                        mt-2
                        lg:mt-3
                    ">
                        Manage and create assignments
                        for your classes.
                    </p>
                </div>


                {/* SEARCH */}

                <input
                    type="text"
                    placeholder="Search Assignment"
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="
                        w-full
                        lg:w-[340px]
                        h-14
                        rounded-full
                        border
                        text-black
                        border-[#E5E5E5]
                        bg-white
                        px-6
                        outline-none
                        text-[15px]
                        lg:text-[17px]
                    "
                />
            </div>


            {/* NO ASSIGNMENTS */}

            {
                assignments.length === 0 && (

                    <div className="
                        w-full
                        h-[70vh]
                        flex
                        items-center
                        justify-center
                    ">

                        <div className="
                            flex
                            flex-col
                            items-center
                            text-center
                        ">

                            <Image
                                src="/empty.png"
                                alt="No assignments"
                                width={220}
                                height={220}
                                className="
                                    object-contain
                                    w-[220px]
                                    sm:w-[260px]
                                    lg:w-[300px]
                                "
                            />

                            <h1 className="
                                text-[30px]
                                sm:text-[36px]
                                lg:text-[42px]
                                font-bold
                                text-[#2D2D2D]
                                mt-4
                            ">
                                No assignments yet
                            </h1>

                            <p className="
                                text-[#7A7A7A]
                                max-w-[520px]
                                mt-3
                                text-[16px]
                                lg:text-[18px]
                                leading-relaxed
                            ">
                                Create your first assignment
                                to start collecting and grading
                                student submissions.
                            </p>

                            <Link
                                href="/assignments/create"
                            >

                                <button className="
                                    mt-8
                                    bg-black
                                    text-white
                                    px-8
                                    py-4
                                    rounded-full
                                    text-lg
                                    hover:scale-105
                                    transition-all
                                ">
                                    + Create Your First Assignment
                                </button>

                            </Link>
                        </div>
                    </div>
                )
            }


            {/* NO SEARCH RESULTS */}

            {
                assignments.length > 0 &&
                filteredAssignments.length === 0 && (

                    <div className="
                        w-full
                        h-[70vh]
                        flex
                        items-center
                        justify-center
                    ">

                        <div className="
                            flex
                            flex-col
                            items-center
                            text-center
                        ">

                            <Image
                                src="/empty.png"
                                alt="No results"
                                width={220}
                                height={220}
                                className="
                                    object-contain
                                    opacity-80
                                    w-[220px]
                                    sm:w-[260px]
                                "
                            />

                            <h1 className="
                                text-[28px]
                                sm:text-[34px]
                                lg:text-[40px]
                                font-bold
                                text-[#2D2D2D]
                                mt-4
                            ">
                                No matching assignments
                            </h1>

                            <p className="
                                text-[#7A7A7A]
                                mt-3
                                text-[16px]
                                lg:text-[18px]
                            ">
                                Try searching with another keyword.
                            </p>
                        </div>
                    </div>
                )
            }


            {/* ASSIGNMENT GRID */}

            {
                filteredAssignments.length > 0 && (

                    <div className="
                        grid
                        grid-cols-1
                        xl:grid-cols-2
                        gap-5
                        lg:gap-6
                        mt-8
                        lg:mt-10
                    ">

                        {
                            filteredAssignments.map(
                                (assignment) => (

                                    <div
                                        key={assignment._id}
                                        className="
                                            bg-white
                                            rounded-4xl
                                            min-h-[220px]
                                            lg:min-h-[230px]
                                            p-5
                                            sm:p-6
                                            lg:p-8
                                            shadow-sm
                                            border
                                            border-[#ECECEC]
                                            relative
                                        "
                                    >

                                        {/* MENU */}

                                        <div className="
                                            absolute
                                            top-6
                                            right-6
                                        ">

                                            <button
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu === assignment._id
                                                            ? null
                                                            : assignment._id
                                                    )
                                                }
                                            >

                                                <MoreVertical
                                                    className="text-gray-500"
                                                />

                                            </button>


                                            {
                                                openMenu === assignment._id && (

                                                    <div className="
                                                        absolute
                                                        right-0
                                                        mt-3
                                                        bg-white
                                                        shadow-xl
                                                        rounded-2xl
                                                        border
                                                        border-[#ECECEC]
                                                        w-[180px]
                                                        overflow-hidden
                                                        z-50
                                                    ">

                                                        <Link
                                                            href={`/ assignments / ${assignment._id} `}
                                                        >

                                                            <button className="
                                                                w-full
                                                                text-left
                                                                px-5
                                                                py-4
                                                                hover:bg-gray-50
                                                                text-black
                                                            ">
                                                                View Assignment
                                                            </button>

                                                        </Link>

                                                        <button
                                                            onClick={() =>
                                                                deleteAssignment(
                                                                    assignment._id
                                                                )
                                                            }
                                                            className="
                                                                w-full
                                                                text-left
                                                                px-5
                                                                py-4
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


                                        {/* SUBJECT */}

                                        <h2 className="
                                            text-[24px]
                                            sm:text-[26px]
                                            lg:text-[28px]
                                            font-bold
                                            text-[#2D2D2D]
                                            break-words
                                            pr-10
                                        ">

                                            {assignment.subject}

                                        </h2>


                                        {/* BOTTOM */}

                                        <div className="
                                            flex
                                            flex-col
                                            sm:flex-row
                                            sm:items-end
                                            justify-between
                                            gap-6
                                            mt-14
                                        ">

                                            <div>

                                                <p className="
                                                    text-[#7A7A7A]
                                                    text-[15px]
                                                    lg:text-[17px]
                                                ">
                                                    Assigned on :
                                                    {" "}
                                                    {
                                                        new Date(
                                                            assignment.createdAt
                                                        ).toLocaleDateString()
                                                    }
                                                </p>

                                                <Link
                                                    href={`/ assignments / ${assignment._id} `}
                                                >

                                                    <button className="
                                                        mt-5
                                                        bg-black
                                                        text-white
                                                        px-6
                                                        py-3
                                                        rounded-full
                                                        text-[15px]
                                                        lg:text-[16px]
                                                        hover:scale-105
                                                        transition-all
                                                    ">
                                                        View Assignment
                                                    </button>

                                                </Link>
                                            </div>


                                            {/* CLASS */}

                                            <div className="
                                                text-left
                                                sm:text-right
                                            ">

                                                <p className="
                                                    text-[#7A7A7A]
                                                    text-[15px]
                                                    lg:text-[17px]
                                                ">
                                                    Class :
                                                    {" "}
                                                    {assignment.class}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}