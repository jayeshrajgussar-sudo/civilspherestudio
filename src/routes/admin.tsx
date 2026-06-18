import { createFileRoute, Outlet, useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("cms_token");
    if (!token && location.pathname !== "/admin/login") {
      setIsAuthenticated(false);
      navigate({ to: "/admin/login" });
    } else {
      setIsAuthenticated(true);
    }
  }, [location.pathname, navigate]);

  // Loading state to prevent flash of content on protected route
  if (isAuthenticated === null && location.pathname !== "/admin/login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-zinc-900">
        <div className="flex flex-col items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900" />
          <div className="text-xs tracking-wider text-zinc-500">Verifying session...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
      <Outlet />
      <Toaster theme="light" position="bottom-right" closeButton />
    </div>
  );
}
