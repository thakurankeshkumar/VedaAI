"use client";

import {
    Sparkles,
    Brain,
    FileText,
    PenTool,
    Languages,
    CheckCircle,
    Search,
    Wand2,
    Bot,
} from "lucide-react";

const tools = [
    {
        id: 1,
        title: "AI Question Generator",
        description:
            "Generate smart assignments and question papers instantly using AI.",
        icon: Brain,
        status: "Active",
    },
    {
        id: 2,
        title: "Grammar Checker",
        description:
            "Automatically detect grammar mistakes and improve writing quality.",
        icon: CheckCircle,
        status: "Beta",
    },
    {
        id: 3,
        title: "AI Notes Generator",
        description:
            "Convert lengthy topics into concise and easy-to-read notes.",
        icon: FileText,
        status: "Active",
    },
    {
        id: 4,
        title: "Essay Assistant",
        description:
            "Generate essays, summaries, and academic content faster.",
        icon: PenTool,
        status: "Coming Soon",
    },
    {
        id: 5,
        title: "Language Translator",
        description:
            "Translate educational content into multiple languages instantly.",
        icon: Languages,
        status: "Beta",
    },
    {
        id: 6,
        title: "AI Research Assistant",
        description:
            "Find insights and organize research material intelligently.",
        icon: Search,
        status: "Active",
    },
];

export default function ToolkitPage() {

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

                {/* HERO */}

                <div
                    className="
                        bg-gradient-to-br
                        from-[#111111]
                        to-[#2A2A2A]
                        rounded-[32px]
                        p-6
                        sm:p-8
                        lg:p-10
                        text-white
                        overflow-hidden
                        relative
                    "
                >

                    <div
                        className="
                            absolute
                            top-[-40px]
                            right-[-40px]
                            w-[180px]
                            h-[180px]
                            bg-orange-500/20
                            rounded-full
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            relative
                            z-10
                            max-w-3xl
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                mb-5
                            "
                        >

                            <div
                                className="
                                    w-14
                                    h-14
                                    rounded-2xl
                                    bg-white/10
                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <Sparkles size={28} />

                            </div>

                            <div>

                                <h1
                                    className="
                                        text-2xl
                                        sm:text-4xl
                                        lg:text-5xl
                                        font-bold
                                    "
                                >
                                    AI Teacher Toolkit
                                </h1>

                                <p
                                    className="
                                        text-white/70
                                        mt-1
                                        text-sm
                                        sm:text-base
                                    "
                                >
                                    Smart AI-powered tools
                                    designed for teachers
                                </p>
                            </div>
                        </div>

                        <p
                            className="
                                text-white/80
                                text-sm
                                sm:text-lg
                                leading-relaxed
                                max-w-2xl
                            "
                        >
                            Save time, improve productivity,
                            and create engaging educational
                            content using advanced AI tools
                            built for modern classrooms.
                        </p>
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
                        mt-8
                    "
                >

                    <StatCard
                        title="Available Tools"
                        value="12+"
                        icon={<Wand2 size={24} />}
                    />

                    <StatCard
                        title="AI Powered"
                        value="100%"
                        icon={<Bot size={24} />}
                    />

                    <StatCard
                        title="Teacher Friendly"
                        value="Easy"
                        icon={<Sparkles size={24} />}
                    />
                </div>


                {/* TOOL GRID */}

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-5
                        mt-8
                        pb-32
                    "
                >

                    {tools.map((tool) => {

                        const Icon = tool.icon;

                        return (

                            <div
                                key={tool.id}
                                className="
                                    bg-white/75
                                    backdrop-blur-md
                                    border
                                    border-[#ECECEC]
                                    rounded-[30px]
                                    p-5
                                    sm:p-6
                                    shadow-sm
                                    hover:shadow-lg
                                    transition-all
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-start
                                            gap-4
                                        "
                                    >

                                        <div
                                            className="
                                                min-w-[56px]
                                                h-[56px]
                                                rounded-2xl
                                                bg-[#F5F5F5]
                                                flex
                                                items-center
                                                justify-center
                                                text-[#2D2D2D]
                                            "
                                        >

                                            <Icon size={28} />

                                        </div>

                                        <div>

                                            <h2
                                                className="
                                                    text-xl
                                                    font-bold
                                                    text-[#2D2D2D]
                                                "
                                            >
                                                {tool.title}
                                            </h2>

                                            <p
                                                className="
                                                    text-[#7A7A7A]
                                                    mt-2
                                                    text-sm
                                                    leading-relaxed
                                                "
                                            >
                                                {
                                                    tool.description
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                {/* FOOTER */}

                                <div
                                    className="
                                        mt-6
                                        flex
                                        flex-col
                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                        gap-4
                                    "
                                >

                                    <div
                                        className={`
                                            px-4
                                            py-2
                                            rounded-full
                                            text-sm
                                            font-medium
                                            w-fit
                                            ${tool.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : tool.status === "Beta"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-gray-200 text-gray-700"
                                            }
                                        `}
                                    >

                                        {tool.status}

                                    </div>

                                    <button
                                        className="
                                            h-11
                                            px-5
                                            rounded-full
                                            bg-[#111111]
                                            text-white
                                            text-sm
                                            hover:scale-105
                                            transition-all
                                        "
                                    >
                                        Open Tool
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


function StatCard({
    title,
    value,
    icon,
}: {
    title: string;
    value: string;
    icon: React.ReactNode;
}) {

    return (

        <div
            className="
                bg-white/75
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