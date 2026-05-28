"use client";

import Image from "next/image";

import {
    Bell,
    ArrowLeft,
    LayoutGrid,
} from "lucide-react";

import {
    usePathname,
    useRouter,
} from "next/navigation";

import {
    useEffect,
    useState,
} from "react";

type SettingsType = {
    principalName: string;
};

export default function Navbar() {

    const pathname = usePathname();

    const router = useRouter();

    const [settings, setSettings] =
        useState<SettingsType | null>(null);

    useEffect(() => {

        async function fetchSettings() {

            try {

                const res =
                    await fetch("/api/settings");

                const data = await res.json();

                if (data.success) {

                    setSettings(data.settings);
                }

            } catch (error) {

                console.log(error);
            }
        }

        fetchSettings();

    }, []);

    function getPageTitle() {

        if (pathname === "/") {
            return "Home";
        }

        if (
            pathname.startsWith(
                "/assignments/create"
            )
        ) {
            return "Create Assignment";
        }

        if (
            pathname.startsWith(
                "/assignments/"
            ) &&
            pathname !== "/assignments"
        ) {
            return "Assignment Details";
        }

        if (
            pathname.startsWith(
                "/assignments"
            )
        ) {
            return "Assignments";
        }

        if (
            pathname.startsWith(
                "/settings"
            )
        ) {
            return "Settings";
        }

        if (
            pathname.startsWith(
                "/groups"
            )
        ) {
            return "My Groups";
        }

        if (
            pathname.startsWith(
                "/library"
            )
        ) {
            return "My Library";
        }

        return "Dashboard";
    }

    return (

        <div className="
            w-full
            bg-[#F5F5F5]
            rounded-[30px]
            px-4
            py-1
            flex
            items-center
            justify-between
            shadow-sm
        ">

            {/* LEFT */}

            <div className="
                flex
                items-center
                gap-5
            ">

                {/* BACK BUTTON */}

                <button
                    onClick={() => router.back()}
                    className="
                        w-14
                        h-14
                        rounded-2xl
                        text-black
                        bg-white
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition-all
                    "
                >

                    <ArrowLeft size={30} />

                </button>

                {/* PAGE TITLE */}

                <div className="
                    flex
                    items-center
                    gap-3
                    text-gray-400
                ">

                    <LayoutGrid size={24} />

                    <span className="
                        text-3xl
                        font-semibold
                        text-[#2D2D2D]
                    ">

                        {getPageTitle()}

                    </span>

                </div>

            </div>

            {/* RIGHT */}

            <div className="
                flex
                items-center
                gap-5
            ">

                {/* NOTIFICATION */}

                <div className="
                    relative
                    text-black
                    cursor-pointer
                    hover:scale-105
                    transition-all
                ">

                    <Bell size={30} />

                    <div className="
                        w-3
                        h-3
                        bg-orange-500
                        rounded-full
                        absolute
                        top-0
                        right-0
                    " />

                </div>

                {/* PROFILE */}

                <div className="
                    flex
                    items-center
                    gap-4
                    bg-white
                    px-4
                    py-2
                    rounded-2xl
                    shadow-sm
                ">

                    <div className="
                        relative
                        w-14
                        h-14
                        rounded-full
                        overflow-hidden
                    ">

                        <Image
                            src="/profile.png"
                            alt="Profile"
                            fill
                            sizes="40px"
                            className="object-cover"
                        />

                    </div>

                    <div>

                        <span className="
                            text-2xl
                            font-semibold
                            text-black
                            block
                        ">

                            {
                                settings?.principalName ||
                                "Teacher Name"
                            }

                        </span>

                        <span className="text-sm text-gray-500">
                            Teacher
                        </span>
                    </div>
                </div>

            </div>

        </div>
    );
}