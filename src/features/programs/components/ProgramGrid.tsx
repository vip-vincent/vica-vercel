"use client";

import { memo } from "react";

import { useRouter } from "next/navigation";

import ProgramFolderCard from "./ProgramFolderCard";
import { Program } from "../types/program.type";

interface ProgramGridProps {
  programs: Program[];
}

function ProgramGrid({ programs }: ProgramGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        gap-6
        grid-cols-2
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {programs.map((program) => (
        <ProgramFolderCard
          key={program.id}
          title={program.title}
          onClick={() => router.push(`/programs/${program.slug}`)}
        />
      ))}
    </div>
  );
}

export default memo(ProgramGrid);
