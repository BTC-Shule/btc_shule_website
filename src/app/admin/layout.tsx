// app/admin/layout.tsx
import Sidebar from "@/components/admin/Sidebar";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedAdmin>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </ProtectedAdmin>
  );
}
