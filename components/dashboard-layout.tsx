import Sidebar from "./sidebar";
import Navbar from "./navbar";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <main className="h-screen overflow-hidden bg-gradient-to-br from-[#EEEEEE] to-[#DADADA] p-3 flex gap-3">

            {/* SIDEBAR */}
            <Sidebar />

            {/* RIGHT SIDE */}
            <section className="flex-1 flex flex-col gap-3">

                {/* NAVBAR */}
                <Navbar />

                {/* PAGE CONTENT */}
                <div className="flex-1 rounded-[32px] bg-gradient-to-br from-[#EEEEEE] to-[#DADADA] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
                    {children}
                </div>
            </section>
        </main>
    );
}