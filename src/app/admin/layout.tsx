"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        setIsAuthenticated(false);
        if (pathname !== "/admin/login") {
          router.push("/admin/login");
        }
      } else {
        setIsAuthenticated(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [router, pathname]);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session && pathname !== "/admin/login") {
      setIsAuthenticated(false);
      router.push("/admin/login");
    } else if (session && pathname === "/admin/login") {
      setIsAuthenticated(true);
      router.push("/admin/dashboard");
    } else {
      setIsAuthenticated(!!session);
    }
  };

  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Allow login page without authentication
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Protect all other admin routes
  if (!isAuthenticated) {
    return null; // Redirect will happen in useEffect
  }

  return <>{children}</>;
}
