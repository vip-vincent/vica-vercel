"use client";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";

import { Lesson } from "@/features/lessons/types/lesson.type";

// Lazy load: react-markdown + remark-gfm cukup berat, hanya perlu di-load
// saat halaman detail lesson ini benar-benar dibuka.
const MarkdownViewer = dynamic(
  () => import("@/components/shared/MarkdownViewer"),
  {
    loading: () => (
      <div className="h-40 w-full animate-pulse rounded-xl bg-slate-100" />
    ),
  },
);

interface LessonContentProps {
  lesson: Lesson;
  markdown: string;
}

export default function LessonContent({
  lesson,
  markdown,
}: LessonContentProps) {
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
            label: "Lessons",
            href: "/lessons",
          },
          {
            label: lesson.title,
          },
        ]}
      />

      <div>
        <MarkdownViewer content={markdown} />
      </div>
    </motion.div>
  );
}
