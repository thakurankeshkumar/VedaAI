"use client";

import Image from "next/image";
import {
    Search,
    Users,
    Plus,
    BookOpen,
} from "lucide-react";

const groups = [
    {
        id: 1,
        name: "Class 10 - Physics",
        subject: "Physics",
        students: 42,
        teacher: "Ankesh Thakur",
    },
    {
        id: 2,
        name: "Class 12 - Mathematics",
        subject: "Mathematics",
        students: 38,
        teacher: "Ankesh Thakur",
    },
    {
        id: 3,
        name: "Class 9 - Computer Science",
        subject: "Computer Science",
        students: 51,
        teacher: "Ankesh Thakur",
    },
    {
        id: 4,
        name: "Class 8 - English",
        subject: "English",
        students: 29,
        teacher: "Ankesh Thakur",
    },
];

export default function MyGroupsPage() {

    return (

        <div className="relative w-full h-full overflow-hidden">

            {/* WATERMARK */}

            <div className="
    fixed
    inset-0
    flex
    items-center
    justify-center
    pointer-events-none
    z-[1]
">

                <div className="
        rotate-[-25deg]
        text-center
        select-none
    ">

                    <h1 className="
            text-[140px]
            font-black
            tracking-[12px]
            text-red-500
            opacity-10
            whitespace-nowrap
        ">
                        STATIC DEMO
                    </h1>

                    <p className="
            text-[42px]
            font-bold
            tracking-[8px]
            text-black
            opacity-20
            mt-2
        ">
                        REVIEW PURPOSE ONLY
                    </p>

                </div>
            </div>


            {/* MAIN CONTENT */}

            <div className="relative z-10 w-full h-full overflow-y-auto px-10 py-8">

                {/* TOP */}

                <div className="flex items-start justify-between mb-10">

                    <div>

                        <h1 className="text-[60px] font-bold text-[#2D2D2D] leading-none">
                            My Groups
                        </h1>

                        <p className="text-[#7A7A7A] text-[22px] mt-3">
                            Manage your classes and student groups.
                        </p>
                        <p className="text-[#ff0000] text-[22px] mt-3">
                            This is just a static Webpage
                        </p>
                    </div>


                    {/* RIGHT */}

                    <div className="flex items-center gap-4">

                        {/* SEARCH */}

                        <div className="bg-white border border-[#E5E5E5] rounded-full px-5 h-14 flex items-center gap-3 w-80">

                            <Search
                                size={20}
                                className="text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Search Groups"
                                className="flex-1 outline-none bg-transparent"
                            />
                        </div>


                        {/* BUTTON */}

                        <button className="bg-black text-white px-7 h-14 rounded-full flex items-center gap-2 hover:scale-105 transition-all">

                            <Plus size={18} />

                            Create Group
                        </button>
                    </div>
                </div>


                {/* GROUPS GRID */}

                <div className="grid grid-cols-2 gap-7 pb-10">

                    {groups.map((group) => (

                        <div
                            key={group.id}
                            className="bg-white/80 backdrop-blur-md rounded-[32px] border border-[#ECECEC] shadow-sm p-8 hover:-translate-y-1 transition-all"
                        >

                            {/* TOP */}

                            <div className="flex items-start justify-between">

                                <div>

                                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">

                                        <BookOpen size={30} />
                                    </div>


                                    <h2 className="text-[32px] font-bold text-[#2D2D2D] leading-tight">
                                        {group.name}
                                    </h2>

                                    <p className="text-[#7A7A7A] text-lg mt-2">
                                        Subject: {group.subject}
                                    </p>
                                </div>


                                <button className="text-gray-400 text-2xl">
                                    ⋮
                                </button>
                            </div>


                            {/* BOTTOM */}

                            <div className="flex items-end justify-between mt-14">

                                <div>

                                    <div className="flex items-center gap-3">

                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">

                                            <Image
                                                src="/profile.png"
                                                alt="Teacher"
                                                fill
                                                sizes="48px"
                                                className="object-cover"
                                            />
                                        </div>


                                        <div>

                                            <p className="text-black font-semibold">
                                                {group.teacher}
                                            </p>

                                            <p className="text-[#7A7A7A] text-sm">
                                                Group Teacher
                                            </p>
                                        </div>
                                    </div>


                                    <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all">
                                        Open Group
                                    </button>
                                </div>


                                {/* STUDENTS */}

                                <div className="flex items-center gap-3 bg-[#F7F7F7] px-5 py-4 rounded-2xl">

                                    <Users
                                        size={22}
                                        className="text-black"
                                    />

                                    <div>

                                        <p className="text-black font-bold text-lg">
                                            {group.students}
                                        </p>

                                        <p className="text-[#7A7A7A] text-sm">
                                            Students
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
