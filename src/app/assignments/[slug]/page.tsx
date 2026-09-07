import { notFound } from "next/navigation";

import AssignmentContent from "./AssignmentContent";

import {
  getAssignments,
  getAssignmentMarkdown,
} from "@/features/assignments/api/assignment.api";

interface AssignmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  const { slug } = await params;

  const assignments = await getAssignments();

  const assignment = assignments.find((item) => item.slug === slug);

  if (!assignment) {
    notFound();
  }

  let markdown = "";

  try {
    markdown = await getAssignmentMarkdown(assignment.githubPath);
  } catch (error) {
    console.error(
      `Failed to fetch markdown for assignment "${assignment.githubPath}":`,
      error,
    );
    markdown = "Konten tugas ini sedang tidak dapat dimuat. Silakan coba lagi nanti.";
  }

  return <AssignmentContent assignment={assignment} markdown={markdown} />;
}
