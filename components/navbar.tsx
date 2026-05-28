"use client";

import Image from "next/image";

import {
    Bell,
    ArrowLeft,
    LayoutGrid,
    Menu,
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
                "/my-groups"
            )
        ) {
            return "Groups";
        }

        if (
            pathname.startsWith(
                "/library"
            )
        ) {
            return "Library";
        }
        if (
            pathname.startsWith(
                "/toolkit"
            )
        ) {
            return "Toolkit";
        }

        return "Dashboard";
    }

    return (

        <div className="
            w-full
            bg-[#F5F5F5]
            rounded-[24px]
            lg:rounded-[30px]
            px-4
            py-3
            flex
            items-center
            justify-between
            shadow-sm
        ">

            {/* LEFT */}

            <div className="
                flex
                items-center
                gap-3
                lg:gap-5
            ">

                {/* BACK BUTTON */}

                <button
                    onClick={() => router.back()}
                    className="
                        w-11
                        h-11
                        lg:w-14
                        lg:h-14
                        rounded-xl
                        lg:rounded-2xl
                        text-black
                        bg-white
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition-all
                    "
                >

                    <ArrowLeft
                        size={22}
                        className="lg:w-[30px] lg:h-[30px]"
                    />

                </button>

                {/* PAGE TITLE */}

                <div className="
                    flex
                    items-center
                    gap-2
                    lg:gap-3
                    text-gray-400
                ">

                    <LayoutGrid
                        size={18}
                        className="lg:w-6 lg:h-6"
                    />

                    <span className="
                        text-lg
                        sm:text-xl
                        lg:text-3xl
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
                gap-2
                lg:gap-5
            ">

                {/* NOTIFICATION */}

                <div className="
                    relative
                    text-black
                    cursor-pointer
                    hover:scale-105
                    transition-all
                    bg-white
                    rounded-full
                    p-2
                    lg:p-0
                ">

                    <Bell
                        size={24}
                        className="lg:w-[30px] lg:h-[30px]"
                    />

                    <div className="
                        w-2.5
                        h-2.5
                        lg:w-3
                        lg:h-3
                        bg-orange-500
                        rounded-full
                        absolute
                        top-1
                        right-1
                    " />

                </div>

                {/* PROFILE */}

                <div className="
                    flex
                    items-center
                    gap-2
                    lg:gap-4
                    bg-white
                    px-2
                    lg:px-4
                    py-2
                    rounded-2xl
                    shadow-sm
                ">

                    <div className="
                        relative
                        w-10
                        h-10
                        lg:w-14
                        lg:h-14
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

                    {/* HIDE NAME ON MOBILE */}

                    <div className="hidden sm:block">

                        <span className="
                            text-lg
                            lg:text-2xl
                            font-semibold
                            text-black
                            block
                        ">

                            {
                                settings?.principalName ||
                                "Teacher Name"
                            }

                        </span>

                        <span className="
                            text-xs
                            lg:text-sm
                            text-gray-500
                        ">
                            Teacher
                        </span>

                    </div>
                </div>

                {/* MOBILE MENU ICON */}

                <button className="
                    lg:hidden
                    bg-white
                    rounded-xl
                    p-2
                    shadow-sm
                ">

                    <Menu size={28} />

                </button>

            </div>

        </div>
    );
}