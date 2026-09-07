"use client";

import { memo } from "react";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { FolderOpen } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Module } from "../types/module.type";

interface ModuleTableProps {
  modules: Module[];
}

function ModuleTable({ modules }: ModuleTableProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-white
        shadow-sm
      "
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F8FAFF] hover:bg-[#F8FAFF]">
            <TableHead
              className="
                h-14
                font-semibold
                text-[#0D1B2A]
              "
            >
              Module
            </TableHead>

            <TableHead
              className="
                font-semibold
                text-[#0D1B2A]
              "
            >
              Program
            </TableHead>

            <TableHead
              className="
                text-center
                font-semibold
                text-[#0D1B2A]
              "
            >
              Lessons
            </TableHead>

            <TableHead
              className="
                text-center
                font-semibold
                text-[#0D1B2A]
              "
            >
              Assignments
            </TableHead>

            <TableHead
              className="
                text-center
                font-semibold
                text-[#0D1B2A]
              "
            >
              Resources
            </TableHead>

            <TableHead
              className="
                font-semibold
                text-[#0D1B2A]
              "
            >
              Updated
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {modules.map((module, index) => (
            <TableRow
              key={module.id}
              onClick={() => router.push(`/modules/${module.slug}`)}
              className="
                cursor-pointer
                transition-all
                duration-200
                hover:bg-[#EDF2FF]
              "
            >
              <TableCell>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.25,
                  }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#EDF2FF]
                    "
                  >
                    <FolderOpen size={20} className="text-[#5477A6]" />
                  </div>

                  <div>
                    <p
                      className="
                        font-semibold
                        text-[#0D1B2A]
                      "
                    >
                      {module.title}
                    </p>

                    <p
                      className="
                        text-xs
                        text-slate-500
                      "
                    >
                      Study Module
                    </p>
                  </div>
                </motion.div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  className="
                    border-[#5477A6]
                    bg-[#EDF2FF]
                    text-[#5477A6]
                  "
                >
                  {module.programTitle || module.programSlug}
                </Badge>
              </TableCell>

              <TableCell
                className="
                  text-center
                  font-medium
                  text-slate-700
                "
              >
                {module.lessons?.length ?? 0}
              </TableCell>

              <TableCell
                className="
                  text-center
                  font-medium
                  text-slate-700
                "
              >
                {module.assignments?.length ?? 0}
              </TableCell>

              <TableCell
                className="
                  text-center
                  font-medium
                  text-slate-700
                "
              >
                {module.resources?.length ?? 0}
              </TableCell>

              <TableCell className="text-slate-500">
                {module.updatedAt || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}

export default memo(ModuleTable);
