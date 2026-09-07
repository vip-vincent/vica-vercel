"use client";

import { memo } from "react";

import { useRouter } from "next/navigation";

import { Module } from "../types/module.type";

import ModuleFolderCard from "./ModuleFolderCard";

interface ModuleGridProps {
  modules: Module[];
}

function ModuleGrid({ modules }: ModuleGridProps) {
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
      {modules.map((module) => (
        <ModuleFolderCard
          key={module.id}
          title={module.title}
          program={module.programSlug}
          lessons={module.lessons?.length ?? 0}
          assignments={module.assignments?.length ?? 0}
          resources={module.resources?.length ?? 0}
          onClick={() => router.push(`/modules/${module.slug}`)}
        />
      ))}
    </div>
  );
}

export default memo(ModuleGrid);
