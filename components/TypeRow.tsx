import type { ReactNode } from "react";

export default function TypeRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-3 py-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
      <span className="text-xs font-medium text-zinc-500">{label}</span>
      <div className="min-w-0 [overflow-wrap:anywhere]">{children}</div>
    </div>
  );
}
