"use client";

import { memo } from "react";

import { motion } from "framer-motion";
import { Folder } from "lucide-react";

interface ProgramFolderCardProps {
  title: string;
  onClick?: () => void;
}

function ProgramFolderCard({
  title,
  onClick,
}: ProgramFolderCardProps) {
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
        flex
        cursor-pointer
        flex-col
        items-center
        rounded-xl
        p-4
        transition-all
        hover:bg-[#DCE7FF]
      "
    >
      <Folder size={84} className="mb-3 text-[#5477A6]" />

      <h3
        className="
          max-w-[160px]
          text-center
          text-sm
          font-medium
          text-slate-700
        "
      >
        {title}
      </h3>
    </motion.div>
  );
}

export default memo(ProgramFolderCard);
