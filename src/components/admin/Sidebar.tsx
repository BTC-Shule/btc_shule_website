"use client";

import Link from "next/link";
import { Newspaper, Calendar, Layout } from "phosphor-react";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: Layout },
  { label: "Blogs", href: "/admin/blogs", icon: Newspaper },
  { label: "Events", href: "/admin/events", icon: Calendar }
];

export default function Sidebar() {
  return (
   <aside className="w-64 bg-white border-r px-6 py-8">
      <h2 className="text-2xl font-extrabold text-primary mb-10">BTC Shule</h2>

      <nav className="space-y-3">
        {nav.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700
             hover:bg-secondary-light/10 hover:text-primary transition"
          >
            <Icon
              size={20}
              weight="duotone"
              className="text-secondary-light group-hover:text-primary transition"
            />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
