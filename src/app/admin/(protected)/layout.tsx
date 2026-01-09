import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = (await cookies()).get("btcshule_admin")?.value === "true";

  // 🔒 HARD BLOCK RENDERING
  if (!isAdmin) {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
