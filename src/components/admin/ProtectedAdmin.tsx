// components/admin/ProtectedAdmin.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedAdmin({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isAuthed = localStorage.getItem("btcshule_admin") === "true";
    if (!isAuthed) router.push("/admin");
  }, [router]);

  return <>{children}</>;
}
