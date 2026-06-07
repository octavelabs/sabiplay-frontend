import type { ReactNode } from "react";
import DashboardLayout from "../layout/DashboardLayout";

/** Applies the dashboard shell (sidebar + header) to every /dashboard route. */
export default function DashboardRouteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
