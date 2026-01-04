"use client";

import Link from "next/link";
import {
  Newspaper,
  Calendar,
  Users,
  Eye,
  PlusCircle,
} from "phosphor-react";

const stats = [
  {
    title: "Blogs",
    value: 1,
    description: "Published articles",
    icon: Newspaper,
    href: "/admin/blogs",
    action: "Manage Blogs",
  },
  {
    title: "Events",
    value: 0,
    description: "Upcoming & past events",
    icon: Calendar,
    href: "#",
    action: "Manage Events",
  },
  {
    title: "Admins",
    value: 1,
    description: "Authorized users",
    icon: Users,
    href: "#",
    action: "Manage Admins",
  },
  {
    title: "Page Views",
    value: "—",
    description: "Analytics (coming soon)",
    icon: Eye,
    href: "#",
    action: "View Analytics",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold text-primary">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Welcome to the BTC Shule admin panel. Manage content, publish stories,
          and oversee platform activity from one central place.
        </p>
      </header>

      {/* Stats Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="relative bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-secondary-light/10">
                  <Icon size={28} className="text-secondary-light" />
                </div>
                <span className="text-3xl font-bold text-primary">
                  {item.value}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary-light transition"
              >
                {item.action}
                <PlusCircle size={16} />
              </Link>
            </div>
          );
        })}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
          Quick Actions
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <QuickAction
            title="Create New Blog"
            description="Publish a new article to the BTC Shule blog"
            href="/admin/blogs/new"
          />
          <QuickAction
            title="Create Event"
            description="Add a new event (coming soon)"
            href="#"
          />
          <QuickAction
            title="Upload Media"
            description="Manage images and assets (coming soon)"
            href="#"
          />
        </div>
      </section>

      {/* System Status */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
          System Status
        </h2>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center justify-between">
              <span>Admin Authentication</span>
              <span className="text-green-600 font-semibold">Active</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Blog Engine</span>
              <span className="text-green-600 font-semibold">Operational</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Events Module</span>
              <span className="text-yellow-500 font-semibold">Planned</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Analytics</span>
              <span className="text-gray-400 font-semibold">Not Connected</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function QuickAction({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-primary group-hover:text-secondary-light">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </Link>
  );
}
