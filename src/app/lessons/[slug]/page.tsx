import { notFound } from "next/navigation";

import LessonContent from "./LessonContent";

import { getLessons } from "@/features/lessons/api/lesson.api";
import { getLessonMarkdown } from "@/features/lessons/api/lesson.api";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;

  const lessons = await getLessons();
  const lesson = lessons.find((item) => item.slug === slug) ?? lessons[0];

  if (!lesson) {
    notFound();
  }

  let markdown = "";

  try {
    markdown = await getLessonMarkdown(lesson.githubPath);
  } catch (error) {
    console.error(
      `Failed to fetch markdown for lesson "${lesson.githubPath}":`,
      error,
    );
    markdown = "Konten pelajaran ini sedang tidak dapat dimuat. Silakan coba lagi nanti.";
  }

  return <LessonContent lesson={lesson} markdown={markdown} />;
}
