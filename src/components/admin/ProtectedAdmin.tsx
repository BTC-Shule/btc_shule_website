// components/admin/ProtectedAdmin.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const isLoginPage = pathname === "/admin";
    const isAuthed = localStorage.getItem("btcshule_admin") === "true";

    // 🚫 Do NOT protect login page
    if (isLoginPage) {
      setChecked(true);
      return;
    }

    // 🔒 Protect everything else
    if (!isAuthed) {
      router.replace("/admin");
    } else {
      setChecked(true);
    }
  }, [pathname, router]);

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Checking session…
      </div>
    );
  }

  return <>{children}</>;
}
