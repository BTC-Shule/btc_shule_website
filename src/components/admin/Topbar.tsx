"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Plus,
} from "phosphor-react";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/blogs": "Blogs",
  "/admin/blogs/new": "Create Blog",
};

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
  localStorage.removeItem("btcshule_admin");
  router.replace("/admin"); 
}

  const title =
    pageTitles[pathname] ||
    pathname.startsWith("/admin/blogs/")
      ? "Edit Blog"
      : "Admin";

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-primary">
            {title}
          </h1>
          <p className="text-sm text-gray-500">
            BTC Shule Admin Panel
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Quick Action */}
          {pathname.startsWith("/admin/blogs") && (
            <Link
              href="/admin/blogs/new"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              <Plus size={16} />
              New Blog
            </Link>
          )}

          {/* Admin Profile */}
          <button className="flex items-center gap-2 px-3 py-2 border rounded-full" onClick={logout} title="Logout">
            <span className="text-sm font-medium text-gray-500">
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
