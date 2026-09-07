"use client";

import { memo } from "react";

import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

interface AssignmentCardProps {
  title: string;
  description: string;

  program: string;
  module: string;

  createdAt: string;

  onClick?: () => void;
}

function AssignmentCard({
  title,
  program,
  module,
  onClick,
}: AssignmentCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
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
        p-4
        transition-all
        hover:border-[#5477A6]
        hover:bg-[#EDF2FF]
      "
    >
      <p
        className="
          mb-2
          text-[10px]
          font-semibold
          uppercase
          tracking-wider
          text-[#5477A6]
        "
      >
        {program}
      </p>

      <ClipboardList size={40} className="mb-3 text-[#5477A6]" />

      <h3
        className="
          mb-2
          line-clamp-2
          min-h-[40px]
          text-sm
          font-semibold
          text-[#0D1B2A]
        "
      >
        {title}
      </h3>

      <p
        className="
          line-clamp-1
          text-xs
          text-slate-500
        "
      >
        {module}
      </p>
    </motion.div>
  );
}

export default memo(AssignmentCard);
