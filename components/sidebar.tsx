"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
    LayoutGrid,
    Users,
    FileText,
    BookOpen,
    Clock3,
    Settings,
    Sparkles,
} from "lucide-react";

type SettingsType = {
    schoolName: string;
    city: string;
};

export default function Sidebar() {

    const pathname = usePathname();

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

    const menuItems = [
        {
            label: "Home",
            href: "/",
            icon: <LayoutGrid size={20} />,
        },
        {
            label: "My Groups",
            href: "/my-groups",
            icon: <Users size={20} />,
        },
        {
            label: "Assignments",
            href: "/assignments",
            icon: <FileText size={20} />,
        },
        {
            label: "AI Teacher’s Toolkit",
            href: "/toolkit",
            icon: <BookOpen size={20} />,
        },
        {
            label: "My Library",
            href: "/library",
            icon: <Clock3 size={20} />,
        },
    ];

    return (

        <div className="
            w-[310px]
            h-full
            bg-[#F5F5F5]
            rounded-[30px]
            p-6
            flex
            flex-col
            justify-between
            shadow-xl
        ">

            {/* TOP */}

            <div>

                {/* LOGO */}

                <Link
                    href="/"
                    className="flex items-center gap-3"
                >

                    <div className="relative w-14 h-14">

                        <Image
                            src="/logo.png"
                            alt="VedaAI Logo"
                            fill
                            sizes="100px"
                            className="object-contain"
                        />

                    </div>

                    <h1 className="
                        text-[42px]
                        font-bold
                        text-[#2D2D2D]
                    ">
                        VedaAI
                    </h1>

                </Link>

                {/* CREATE BUTTON */}

                <Link
                    href="/assignments/create"
                    className="
                        mt-12
                        w-full
                        bg-[#242424]
                        text-white
                        py-4
                        rounded-full
                        border-[4px]
                        border-orange-400
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-lg
                        font-medium
                        shadow-lg
                        hover:scale-[1.02]
                        transition-all
                    "
                >

                    <Sparkles size={18} />

                    Create Assignment

                </Link>

                {/* MENU */}

                <div className="mt-12 space-y-1">

                    {
                        menuItems.map((item) => {

                            const active =
                                pathname === item.href ||
                                pathname.startsWith(
                                    `${item.href}/`
                                );

                            return (

                                <MenuItem
                                    key={item.href}
                                    href={item.href}
                                    icon={item.icon}
                                    label={item.label}
                                    active={active}
                                />

                            );
                        })
                    }

                </div>

            </div>

            {/* BOTTOM */}

            <div>

                <MenuItem
                    href="/settings"
                    icon={<Settings size={20} />}
                    label="Settings"
                    active={
                        pathname === "/settings"
                    }
                />

                <div className="
                    mt-5
                    bg-[#ECECEC]
                    rounded-[24px]
                    p-3
                    flex
                    items-center
                    gap-4
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

                        <h3 className="
                            font-bold
                            text-black
                        ">
                            {
                                settings?.schoolName ||
                                "School Name"
                            }
                        </h3>

                        <p className="text-gray-500">
                            {
                                settings?.city ||
                                "City"
                            }
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
    href: string;
    active?: boolean;
};

function MenuItem({
    icon,
    label,
    href,
    active,
}: MenuItemProps) {

    return (

        <Link
            href={href}
            className={`
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-2xl
                cursor-pointer
                transition-all

                ${active
                    ? "bg-[#ECECEC] text-black font-semibold"
                    : "text-gray-500 hover:bg-[#EEEEEE]"
                }
            `}
        >

            {icon}

            <span className="text-[18px]">
                {label}
            </span>

        </Link>
    );
}