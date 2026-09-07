"use client";

import { memo } from "react";

import { useRouter } from "next/navigation";

import { Assignment } from "../types/assignment.type";

import AssignmentCard from "./AssignmentCard";

interface AssignmentGridProps {
  assignments: Assignment[];
}

function AssignmentGrid({ assignments }: AssignmentGridProps) {
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
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          title={assignment.title}
          description={assignment.description ?? ""}
          program={assignment.programSlug}
          module={assignment.moduleSlug}
          createdAt={assignment.createdAt ?? ""}
          onClick={() => router.push(`/assignments/${assignment.slug}`)}
        />
      ))}
    </div>
  );
}

export default memo(AssignmentGrid);
