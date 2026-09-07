"use client";

import { memo } from "react";

import { useRouter } from "next/navigation";

import { Lesson } from "../types/lesson.type";

import LessonCard from "./LessonCard";

interface LessonGridProps {
  lessons: Lesson[];
}

function LessonGrid({ lessons }: LessonGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        gap-4
        grid-cols-2
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          description={lesson.description ?? ""}
          program={lesson.programSlug}
          module={lesson.moduleSlug}
          createdAt={lesson.createdAt ?? ""}
          onClick={() => router.push(`/lessons/${lesson.slug}`)}
        />
      ))}
    </div>
  );
}

export default memo(LessonGrid);
