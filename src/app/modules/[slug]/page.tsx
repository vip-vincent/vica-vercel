import { notFound } from "next/navigation";

import ModuleContent from "./ModuleContent";

import GithubService from "@/services/github.service";

import { mapModule } from "@/features/modules/mappers/module.mapper";

import { mapLesson } from "@/features/lessons/mappers/lesson.mapper";
import { mapAssignment } from "@/features/assignments/mappers/assignment.mapper";
import { mapResource } from "@/features/resources/mappers/resource.mapper";

import slugify from "@/utils/slugify";

interface ModuleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModuleDetailPage({
  params,
}: ModuleDetailPageProps) {
  const { slug } = await params;

  let programsRaw: any[];

  try {
    programsRaw = await GithubService.getPrograms();
  } catch (error) {
    console.error("Failed to fetch programs from GitHub:", error);
    notFound();
  }

  const programs = programsRaw.filter((item: any) => item.type === "dir");

  let selectedModule = null;

  for (const program of programs) {
    let modules: any[];

    try {
      modules = await GithubService.getModules(program.name);
    } catch (error) {
      console.error(
        `Failed to fetch modules for program "${program.name}":`,
        error,
      );
      continue;
    }

    const found = modules.find(
      (module: any) =>
        `${slugify(program.name)}-${slugify(module.name)}` === slug,
    );

    if (!found) {
      continue;
    }

    const moduleData = mapModule(found, slugify(program.name), program.name);

    try {
      const lessons = await GithubService.getLessons(program.name, found.name);

      moduleData.lessons = Array.isArray(lessons)
        ? lessons
            .filter((item: any) => item.type === "dir")
            .map((item: any) => mapLesson(item, program.name, found.name))
        : [];
    } catch {
      moduleData.lessons = [];
    }

    try {
      const assignments = await GithubService.getAssignments(
        program.name,
        found.name,
      );

      moduleData.assignments = Array.isArray(assignments)
        ? assignments
            .filter((item: any) => item.type === "dir")
            .map((item: any) => mapAssignment(item, program.name, found.name))
        : [];
    } catch {
      moduleData.assignments = [];
    }

    try {
      const resources = await GithubService.getResources(
        program.name,
        found.name,
      );

      moduleData.resources = Array.isArray(resources)
        ? resources
            .filter((item: any) => item.type !== "dir")
            .map((item: any) => mapResource(item))
        : [];
    } catch {
      moduleData.resources = [];
    }

    selectedModule = moduleData;

    break;
  }

  if (!selectedModule) {
    notFound();
  }

  return <ModuleContent module={selectedModule} />;
}
