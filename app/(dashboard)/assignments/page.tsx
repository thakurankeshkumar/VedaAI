import DashboardLayout from "@/components/dashboard-layout";
import Image from "next/image";

export default function AssignmentsPage() {
    return (
        // <DashboardLayout>

            <div className="w-full h-full flex items-center justify-center">

                <div className="flex flex-col items-center text-center">

                    <Image
                        src="/empty.png"
                        alt="No assignments"
                        width={320}
                        height={320}
                        className="object-contain"
                    />

                    <h1 className="text-[32px] font-bold text-[#2D2D2D] mt-2">
                        No assignments yet
                    </h1>

                    <p className="text-[#7A7A7A] max-w-[520px] mt-3 text-[18px] leading-relaxed">
                        Create your first assignment to start collecting and grading
                        student submissions. You can set up rubrics, define marking
                        criteria, and let AI assist with grading.
                    </p>

                    <button className="mt-8 bg-[#1F1F1F] hover:scale-105 transition-all text-white px-8 py-4 rounded-full text-lg shadow-lg">
                        + Create Your First Assignment
                    </button>

                </div>
            </div>

        // {/* </DashboardLayout> */}
    );
}