"use client";

import { memo } from "react";

import { motion } from "framer-motion";

import { FolderOpen, BookOpen, ClipboardCheck, Package } from "lucide-react";

interface ModuleFolderCardProps {
  title: string;
  program: string;

  lessons: number;
  assignments: number;
  resources: number;

  onClick?: () => void;
}

function ModuleFolderCard({
  title,
  program,
  lessons,
  assignments,
  resources,
  onClick,
}: ModuleFolderCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="
        cursor-pointer
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-white
        p-5
        transition-all
        hover:border-[#5477A6]
        hover:bg-[#EDF2FF]
      "
    >
      {/* Program */}
      <p
        className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-[#5477A6]
        "
      >
        {program}
      </p>

      {/* Icon */}
      <FolderOpen size={72} className="mb-4 text-[#5477A6]" />

      {/* Module Name */}
      <h3
        className="
          mb-5
          line-clamp-2
          font-semibold
          text-[#0D1B2A]
        "
      >
        {title}
      </h3>

      {/* Stats */}
      <div
        className="
          flex
          items-center
          gap-3
          text-sm
          text-slate-500
        "
      >
        <div className="flex items-center gap-2">
          <BookOpen size={12} className="text-[#5477A6]" />

          <span>{lessons}</span>
        </div>

        <div className="flex items-center gap-2">
          <ClipboardCheck size={12} className="text-[#5477A6]" />

          <span>{assignments}</span>
        </div>

        <div className="flex items-center gap-2">
          <Package size={12} className="text-[#5477A6]" />

          <span>{resources}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ModuleFolderCard);
