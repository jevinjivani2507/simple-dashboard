"use client";

import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import { fadeIn } from "@/lib/animations-utils";
import { WrenchIcon } from "@phosphor-icons/react";

const WorkInProgress = () => {
  const { isExpanded } = useSidebarStore();

  return (
    <motion.div
      className="scrollbar-hide flex-1 overflow-auto p-6"
      animate={{
        marginLeft: isExpanded ? "0" : "0",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.div
        {...fadeIn(0)}
        className="flex h-full flex-col items-center justify-center"
      >
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="bg-accent rounded-full p-8">
              <WrenchIcon className="text-muted-foreground h-20 w-20" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Work in Progress</h1>
          <p className="text-muted-foreground text-lg">
            This page is currently under construction.
          </p>
          <p className="text-muted-foreground text-sm">
            We&apos;re working hard to bring you something amazing!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkInProgress;
