"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LeadsAdmin() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to new protected admin dashboard
    router.push("/admin/dashboard");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl">Redirecting to admin dashboard...</div>
    </div>
  );
}
