"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Newspaper, Calendar, Users, Eye, PlusCircle } from "phosphor-react";

export default function AdminDashboard() {
  const [blogCount, setBlogCount] = useState<number | null>(null);
  const [eventCount, setEventCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/blogs/count")
      .then((res) => res.json())
      .then((d) => setBlogCount(d.count))
      .catch(() => setBlogCount(0));

    fetch("/api/admin/events/count")
      .then((res) => res.json())
      .then((d) => setEventCount(d.count))
      .catch(() => setEventCount(0));
  }, []);

  const stats = [
    {
      title: "Blogs",
      value: blogCount ?? "—",
      description: "Published articles",
      icon: Newspaper,
      href: "/admin/blogs",
      accent: "from-secondary-light/20 to-secondary-light/5",
    },
    {
      title: "Events",
      value: eventCount ?? "—",
      description: "Upcoming & past events",
      icon: Calendar,
      href: "/admin/events",
      accent: "from-secondary-light/20 to-secondary-light/5",
    },
    {
      title: "Admins",
      value: 1,
      description: "Authorized users",
      icon: Users,
      href: "#",
      accent: "from-secondary-light/20 to-secondary-light/5",
    },
    {
      title: "Analytics",
      value: "—",
      description: "Coming soon",
      icon: Eye,
      href: "#",
      accent: "from-secondary-light/20 to-secondary-light/5",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight">
          Dashboard
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Overview of platform activity, content performance, and system health.
        </p>
      </header>

      {/* Stats */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group relative rounded-3xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition`}
              />

              <div className="relative flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-secondary-light/10">
                  <Icon size={28} className="text-secondary-light" />
                </div>
                <span className="text-4xl font-bold text-primary">
                  {item.value}
                </span>
              </div>

              <div className="relative mt-6 space-y-1">
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary-light">
                Manage
                <PlusCircle size={16} />
              </div>
            </Link>
          );
        })}
      </section>

      {/* Quick Actions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">Quick Actions</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <QuickAction
            title="Create Blog"
            description="Publish a new article"
            href="/admin/blogs/new"
          />
          <QuickAction
            title="Create Event"
            description="Schedule a new event"
            href="/admin/events/new"
          />
          <QuickAction
            title="Upload Media"
            description="Manage images & assets"
            href="#"
          />
        </div>
      </section>

      {/* System Status */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">System Status</h2>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <ul className="divide-y text-sm">
            {[
              ["Authentication", "Active", "text-green-600"],
              ["Blog Engine", "Operational", "text-green-600"],
              ["Events Module", "Operational", "text-green-600"],
              ["Analytics", "Not Connected", "text-gray-400"],
            ].map(([label, status, color]) => (
              <li
                key={label}
                className="flex items-center justify-between py-3"
              >
                <span className="text-gray-600">{label}</span>
                <span className={`font-semibold ${color}`}>{status}</span>
              </li>
            ))}
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
      className="group rounded-3xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all"
    >
      <h3 className="text-lg font-semibold text-primary group-hover:text-secondary-light">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </Link>
  );
}
