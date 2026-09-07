"use client";

import { memo } from "react";

import { motion } from "framer-motion";

import { Download } from "lucide-react";

import { ResourceType } from "../types/resource.type";
import { getResourceIcon } from "../utils/getResourceIcon";

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  size: string;
  program: string;
  module: string;
  downloadUrl?: string;

  onClick?: () => void;
}

function ResourceCard({
  title,
  description,
  type,
  size,
  program,
  module,
  downloadUrl,
  onClick,
}: ResourceCardProps) {
  const { Icon, color } = getResourceIcon(type);

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
      <Icon size={42} className={`mb-3 ${color}`} />

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
          mb-3
          line-clamp-2
          text-xs
          text-slate-500
        "
      >
        {description}
      </p>
      <p
        className="
          line-clamp-1
          text-xs
          text-slate-500
        "
      >
        {module}
      </p>
      <div
        className="
          flex
          items-center
          justify-between
          gap-2
        "
      >
        <p
          className="
            text-xs
            text-slate-400
          "
        >
          {type.toUpperCase()} • {size}
        </p>

        {downloadUrl && (
          <a
            href={`/download?url=${encodeURIComponent(downloadUrl)}`}
            target="_blank"
            rel="noreferrer"
            download
            onClick={(e) => e.stopPropagation()}
            className="
              flex
              items-center
              gap-1
              rounded-md
              px-2
              py-1
              text-xs
              font-medium
              text-[#5477A6]
              hover:bg-[#DCE7FF]
            "
          >
            <Download size={14} />
            Download
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default memo(ResourceCard);
