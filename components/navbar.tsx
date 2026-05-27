"use client";
import Image from "next/image";
import {
    Bell,
    ChevronDown,
    ArrowLeft,
    LayoutGrid,
} from "lucide-react";

export default function Navbar() {
    return (
        <div className="w-full bg-[#F5F5F5] rounded-[30px] px-4 py-1 flex items-center justify-between shadow-sm">

            {/* LEFT */}
            <div className="flex items-center gap-5">

                <button className="w-14 h-14 rounded-2xl text-black bg-white flex items-center justify-center">
                    <ArrowLeft size={30} />
                </button>

                <div className="flex items-center gap-3 text-gray-400">
                    <LayoutGrid size={24} />

                    <span className="text-3xl font-semibold">
                        Assignment
                    </span>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5">

                <div className="relative text-black">
                    <Bell size={30} />

                    <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-0 right-0" />
                </div>

                <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-2xl">

                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            fill
                            sizes="40px"
                            className="object-cover"
                        />
                    </div>

                    <span className="text-2xl font-semibold text-black">
                        John Doe
                    </span>

                    <ChevronDown />
                </div>
            </div>
        </div>
    );
}