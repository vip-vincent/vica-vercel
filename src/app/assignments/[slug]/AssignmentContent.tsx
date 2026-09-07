"use client";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";

import { Assignment } from "@/features/assignments/types/assignment.type";

// Lazy load: react-markdown + remark-gfm cukup berat, hanya perlu di-load
// saat halaman detail assignment ini benar-benar dibuka.
const MarkdownViewer = dynamic(
  () => import("@/components/shared/MarkdownViewer"),
  {
    loading: () => (
      <div className="h-40 w-full animate-pulse rounded-xl bg-slate-100" />
    ),
  },
);

interface AssignmentContentProps {
  assignment: Assignment;
  markdown: string;
}

export default function AssignmentContent({
  assignment,
  markdown,
}: AssignmentContentProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="space-y-8"
    >
      <PageHeader
        title={""}
        description={""}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Assignments",
            href: "/assignments",
          },
          {
            label: assignment.title,
          },
        ]}
      />

      <div>
        <MarkdownViewer content={markdown} />
      </div>
    </motion.div>
  );
}
