import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedAdmin>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </ProtectedAdmin>
  );
}
