"use client";

import Link from "next/link";

import {
    LayoutGrid,
    FileText,
    Settings,
    Sparkles,
    Plus,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function MobileBottomBar() {

    const pathname = usePathname();

    const menus = [
        {
            label: "Home",
            icon: LayoutGrid,
            href: "/",
        },
        {
            label: "Assignments",
            icon: FileText,
            href: "/assignments",
        }, {
            label: "Settings",
            icon: Settings,
            href: "/settings",
        },
        {
            label: "AI Toolkit",
            icon: Sparkles,
            href: "/toolkit",
        },
    ];

    return (

        <>
            {/* FLOATING CREATE BUTTON */}

            <Link
                href="/assignments/create"
                className="
                    fixed
                    bottom-24
                    right-5
                    z-50
                    lg:hidden
                "
            >

                <button className="
                    w-16
                    h-16
                    rounded-full
                    bg-white
                    shadow-2xl
                    flex
                    items-center
                    justify-center
                    text-orange-500
                    hover:scale-105
                    transition-all
                ">

                    <Plus size={34} />

                </button>
            </Link>


            {/* BOTTOM BAR */}

            <div className="
                fixed
                bottom-4
                left-1/2
                -translate-x-1/2
                z-40
                w-[95%]
                max-w-md
                lg:hidden
            ">

                <div className="
                    bg-[#111111]
                    rounded-[32px]
                    px-2
                    py-3
                    flex
                    items-center
                    justify-around
                    shadow-2xl
                    border
                    border-[#2A2A2A]
                    backdrop-blur-xl
                ">

                    {menus.map((item) => {

                        const Icon = item.icon;

                        const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");

                        return (

                            <Link
                                key={item.label}
                                href={item.href}
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-1
                                    flex-1
                                "
                            >

                                <div className={`
                                    transition-all
                                    ${active
                                        ? "text-white"
                                        : "text-[#5A5A5A]"
                                    }
                                `}>

                                    <Icon size={24} />

                                </div>

                                <span className={`
                                    text-[12px]
                                    transition-all
                                    ${active
                                        ? "text-white font-medium"
                                        : "text-[#5A5A5A]"
                                    }
                                `}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
