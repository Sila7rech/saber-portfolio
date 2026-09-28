"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  detail: string;
  className?: string;
};

export function StatCard({ value, label, detail, className }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={cn(
        "group rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl",
        className
      )}
    >
      <div className="space-y-2">
        <div className="text-3xl font-semibold text-white">{value}</div>
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/70">{label}</div>
        <p className="text-sm leading-6 text-slate-300">{detail}</p>
      </div>
    </motion.div>
  );
}