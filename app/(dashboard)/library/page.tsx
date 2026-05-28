"use client";

import {
    Search,
    BookOpen,
    FileText,
    Download,
    Eye,
    FolderOpen,
} from "lucide-react";

const libraryItems = [
    {
        id: 1,
        title: "Web Development Notes",
        type: "PDF Document",
        size: "2.4 MB",
        date: "28 May 2026",
    },
    {
        id: 2,
        title: "Computer Networks Assignment",
        type: "DOCX File",
        size: "1.1 MB",
        date: "25 May 2026",
    },
    {
        id: 3,
        title: "Database Management System",
        type: "PDF Document",
        size: "3.8 MB",
        date: "20 May 2026",
    },
    {
        id: 4,
        title: "Operating System Notes",
        type: "PPT Presentation",
        size: "5.2 MB",
        date: "18 May 2026",
    },
    {
        id: 5,
        title: "Java Programming Guide",
        type: "PDF Document",
        size: "4.1 MB",
        date: "14 May 2026",
    },
    {
        id: 6,
        title: "AI Research Paper",
        type: "DOCX File",
        size: "2.9 MB",
        date: "10 May 2026",
    },
];

export default function LibraryPage() {

    return (

        <div className="w-full min-h-full relative">

            {/* WATERMARK */}

            <div
                className="
                    fixed
                    inset-0
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                    z-0
                "
            >

                <h1
                    className="
                        text-[40px]
                        sm:text-[70px]
                        lg:text-[140px]
                        font-black
                        text-black/10
                        rotate-[-20deg]
                        select-none
                    "
                >
                    STATIC PAGE
                </h1>
            </div>


            {/* CONTENT */}

            <div className="relative z-10">

                {/* HEADER */}

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-5
                        mb-8
                    "
                >

                    <div>

                        <h1
                            className="
                                text-2xl
                                sm:text-4xl
                                lg:text-5xl
                                font-bold
                                text-[#2D2D2D]
                            "
                        >
                            My Library
                        </h1>

                        <p
                            className="
                                text-[#7A7A7A]
                                mt-2
                                text-sm
                                sm:text-lg
                            "
                        >
                            Access your saved notes,
                            assignments and study materials.
                        </p>
                        <p className="text-[#ff0000] mt-2 text-sm sm:text-lg">This is just a static Webpage</p>
                    </div>


                    {/* SEARCH */}

                    <div
                        className="
                            w-full
                            lg:w-[340px]
                            h-14
                            rounded-full
                            border
                            border-[#E5E5E5]
                            bg-white/70
                            backdrop-blur-md
                            px-5
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <Search
                            size={20}
                            className="text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search files"
                            className="
                                flex-1
                                bg-transparent
                                outline-none
                                text-sm
                            "
                        />
                    </div>
                </div>


                {/* STATS */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                        mb-8
                    "
                >

                    <StatCard
                        icon={<BookOpen size={24} />}
                        title="Total Files"
                        value="48"
                    />

                    <StatCard
                        icon={<FolderOpen size={24} />}
                        title="Folders"
                        value="12"
                    />

                    <StatCard
                        icon={<FileText size={24} />}
                        title="Documents"
                        value="36"
                    />
                </div>


                {/* FILES */}

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-4
                        sm:gap-5
                        pb-32
                    "
                >

                    {libraryItems.map((item) => (

                        <div
                            key={item.id}
                            className="
                                bg-white/75
                                backdrop-blur-md
                                border
                                border-[#ECECEC]
                                rounded-[28px]
                                sm:rounded-[32px]
                                p-4
                                sm:p-6
                                shadow-sm
                            "
                        >

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-start
                                    sm:justify-between
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                        sm:gap-4
                                        min-w-0
                                    "
                                >

                                    <div
                                        className="
                                            min-w-[52px]
                                            h-[52px]
                                            sm:min-w-[60px]
                                            sm:h-[60px]
                                            rounded-2xl
                                            bg-[#F5F5F5]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <FileText
                                            size={26}
                                            className="text-[#2D2D2D]"
                                        />
                                    </div>

                                    <div className="min-w-0">

                                        <h2
                                            className="
                                                text-lg
                                                sm:text-xl
                                                font-bold
                                                text-[#2D2D2D]
                                                break-words
                                            "
                                        >
                                            {item.title}
                                        </h2>

                                        <p
                                            className="
                                                text-sm
                                                text-[#7A7A7A]
                                                mt-1
                                            "
                                        >
                                            {item.type}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* INFO */}

                            <div
                                className="
                                    mt-6
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    text-sm
                                    text-[#7A7A7A]
                                    gap-2
                                "
                            >

                                <span>
                                    Size: {item.size}
                                </span>

                                <span>
                                    Added: {item.date}
                                </span>
                            </div>


                            {/* ACTIONS */}

                            <div
                                className="
                                    mt-6
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    gap-3
                                "
                            >

                                <button
                                    className="
                                        px-5
                                        h-11
                                        sm:h-12
                                        rounded-full
                                        bg-[#111111]
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        text-sm
                                        hover:scale-105
                                        transition-all
                                    "
                                >

                                    <Eye size={16} />

                                    View
                                </button>

                                <button
                                    className="
                                        px-5
                                        h-11
                                        sm:h-12
                                        rounded-full
                                        border
                                        border-[#E5E5E5]
                                        bg-white
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        text-sm
                                        hover:bg-[#F7F7F7]
                                        transition-all
                                    "
                                >

                                    <Download size={16} />

                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function StatCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {

    return (

        <div
            className="
                bg-white/70
                backdrop-blur-md
                border
                border-[#ECECEC]
                rounded-[28px]
                p-5
                sm:p-6
            "
        >

            <div
                className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-[#F5F5F5]
                    flex
                    items-center
                    justify-center
                    text-[#2D2D2D]
                "
            >
                {icon}
            </div>

            <h3
                className="
                    mt-5
                    text-base
                    sm:text-lg
                    text-[#7A7A7A]
                "
            >
                {title}
            </h3>

            <h2
                className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-[#2D2D2D]
                    mt-1
                "
            >
                {value}
            </h2>
        </div>
    );
}