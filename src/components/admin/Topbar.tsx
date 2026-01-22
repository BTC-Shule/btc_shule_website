"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "phosphor-react";

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",

  // Blogs
  "/admin/blogs": "Blogs",
  "/admin/blogs/new": "Create Blog",

  // Events
  "/admin/events": "Events",
  "/admin/events/new": "Create Event",
};

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Secure logout
  async function logout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      router.replace("/admin");
    }
  }

  // 🔹 Dynamic title resolution
  const title =
    pageTitles[pathname] ||
    (pathname.startsWith("/admin/blogs/")
      ? "Edit Blog"
      : pathname.startsWith("/admin/events/")
      ? "Edit Event"
      : "Admin");

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            {title}
          </h1>
          <p className="text-sm text-gray-500">
            BTC Shule Admin Panel
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Contextual Quick Action */}
          {pathname.startsWith("/admin/blogs") && (
            <Link
              href="/admin/blogs/new"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-secondary-light transition"
            >
              <Plus size={16} />
              New Blog
            </Link>
          )}

          {pathname.startsWith("/admin/events") && (
            <Link
              href="/admin/events/new"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-secondary-light transition"
            >
              <Plus size={16} />
              New Event
            </Link>
          )}

          {/* Logout */}
          <button
            onClick={logout}
            className="rounded-full border border-secondary-light text-secondary-light px-4 py-2 text-sm font-medium hover:bg-secondary-light/10 transition"
            title="Logout"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}
