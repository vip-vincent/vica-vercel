"use client";

import { memo } from "react";

import { useRouter } from "next/navigation";

import { Resource } from "../types/resource.type";

import ResourceCard from "./ResourceCard";

interface ResourceGridProps {
  resources: Resource[];
}

function ResourceGrid({ resources }: ResourceGridProps) {
  const router = useRouter();

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        grid-cols-2
        md:grid-cols-4
        xl:grid-cols-6
      "
    >
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          title={resource.title}
          description={resource.description}
          program={resource.programSlug}
          module={resource.moduleSlug}
          type={resource.type}
          size={resource.size}
          onClick={() => router.push(`/resources/${resource.slug}`)}
        />
      ))}
    </div>
  );
}

export default memo(ResourceGrid);
