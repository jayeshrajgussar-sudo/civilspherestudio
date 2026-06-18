import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, KeyRound, AlertCircle, ArrowRight } from "lucide-react";
import { checkAdminAuth } from "../../lib/cms";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cms_token")) {
      navigate({ to: "/admin" });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await checkAdminAuth({ data: { password } });
      if (res.authenticated && res.token) {
        localStorage.setItem("cms_token", res.token);
        toast.success("Successfully authenticated");
        navigate({ to: "/admin" });
      } else {
        setError(res.error || "Authentication failed");
        toast.error(res.error || "Authentication failed");
      }
    } catch (err: any) {
      console.error(err);
      setError("An error occurred during authentication.");
      toast.error("An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-50 px-4">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md"
      >
        {/* Brand Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <img src="/logo/civilsphere-logo.png" alt="CivilSphere Studio Logo" className="h-12 w-12 object-cover rounded-full border border-zinc-200" />
          <h1 className="mt-4 font-display text-2xl font-medium tracking-tight text-zinc-900">
            CivilSphere <span className="text-blue-600">Studio</span> CMS
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Enter the admin password to manage site content
          </p>
        </div>

        {/* Card Form */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Password
              </label>
              <div className="relative rounded-xl border border-zinc-200 bg-white transition focus-within:border-zinc-400">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <KeyRound className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3 text-xs text-red-600"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-zinc-800 disabled:opacity-50"
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          <a href="/" className="hover:text-zinc-800 transition">
            &larr; Back to website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
