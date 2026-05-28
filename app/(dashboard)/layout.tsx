import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <div className="flex h-screen overflow-hidden bg-[#f4f4f4]">

            {/* Desktop Sidebar */}
            <div className="hidden lg:block h-screen sticky top-0">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Navbar */}
                <div className="sticky top-0 z-50 bg-[#f4f4f4] p-4 pb-0">
                    <Navbar />
                </div>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 pt-2 pb-32 lg:pb-4">
                    {children}
                </main>

                {/* Mobile Bottom Navigation */}
                <MobileBottomBar />

            </div>
        </div>
    );
}