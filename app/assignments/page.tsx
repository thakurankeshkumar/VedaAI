import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function AssignmentsPage() {
    return (
        <main className="h-screen overflow-hidden bg-gradient-to-br from-[#EEEEEE] to-[#DADADA] p-3 flex gap-3">

            {/* SIDEBAR */}
            <Sidebar />

            {/* RIGHT SIDE */}
            <section className="flex-1 flex flex-col gap-3">

                {/* NAVBAR */}
                <Navbar />

                {/* CONTENT */}
                <div className="flex-1 rounded-[32px] bg-gradient-to-br from-[#EEEEEE] to-[#DADADA] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center">

                    <div className="flex flex-col items-center text-center">

                        {/* IMAGE */}
                        <Image
                            src="/empty.png"
                            alt="No assignments"
                            width={320}
                            height={320}
                            className="object-contain"
                        />

                        {/* TITLE */}
                        <h1 className="text-[32px] font-bold text-[#2D2D2D] mt-2">
                            No assignments yet
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-[#7A7A7A] max-w-[520px] mt-3 text-[18px] leading-relaxed">
                            Create your first assignment to start collecting and grading
                            student submissions. You can set up rubrics, define marking
                            criteria, and let AI assist with grading.
                        </p>

                        {/* BUTTON */}
                        <button className="mt-8 bg-[#1F1F1F] hover:scale-105 transition-all text-white px-8 py-4 rounded-full text-lg shadow-lg">
                            + Create Your First Assignment
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}