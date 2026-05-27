"use client";
import Image from "next/image";
import {
    LayoutGrid,
    Users,
    FileText,
    BookOpen,
    Clock3,
    Settings,
    Sparkles,
} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-[310px] h-full bg-[#F5F5F5] rounded-[30px] p-6 flex flex-col justify-between shadow-xl">

            {/* TOP */}
            <div>

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14">
                        <Image
                            src="/logo.png"
                            alt="VedaAI Logo"
                            fill
                            sizes="100px"
                            className="object-contain"
                        />
                    </div>

                    <h1 className="text-[42px] font-bold text-[#2D2D2D]">
                        VedaAI
                    </h1>
                </div>

                {/* BUTTON */}
                <button className="mt-12 w-full bg-[#242424] text-white py-4 rounded-full border-[4px] border-orange-400 flex items-center justify-center gap-2 text-lg font-medium shadow-lg">
                    <Sparkles size={18} />
                    Create Assignment
                </button>

                {/* MENU */}
                <div className="mt-12 space-y-1">

                    <MenuItem icon={<LayoutGrid size={20} />} label="Home" />

                    <MenuItem icon={<Users size={20} />} label="My Groups" />

                    <MenuItem
                        active
                        icon={<FileText size={20} />}
                        label="Assignments"
                    />

                    <MenuItem
                        icon={<BookOpen size={20} />}
                        label="AI Teacher’s Toolkit"
                    />

                    <MenuItem
                        icon={<Clock3 size={20} />}
                        label="My Library"
                    />
                </div>
            </div>

            {/* BOTTOM */}
            <div>

                <MenuItem
                    icon={<Settings size={20} />}
                    label="Settings"
                />

                <div className="mt-5 bg-[#ECECEC] rounded-[24px] p-3 flex items-center gap-4">

                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            fill
                            sizes="40px"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="font-bold text-black">
                            Delhi Public School
                        </h3>

                        <p className="text-gray-500">
                            Bokaro Steel City
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

type MenuItemProps = {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
};

function MenuItem({
    icon,
    label,
    active,
}: MenuItemProps) {
    return (
        <div
            className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all ${active
                ? "bg-[#ECECEC] text-black font-semibold"
                : "text-gray-500"
                }`}
        >
            {icon}

            <span className="text-[18px]">
                {label}
            </span>
        </div>
    );
}