"use client";

import { motion } from "motion/react";
import { useContactsStore } from "@/lib/store";

const ContactsSection = () => {
  const { isExpanded } = useContactsStore();

  return (
    <motion.div
      className="bg-sidebar border-sidebar-border overflow-hidden border-l"
      animate={{
        width: isExpanded ? "21rem" : "0", // w-84 : w-0
      }}
      initial={{
        width: isExpanded ? "21rem" : "0",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {isExpanded ? "Contacts" : ""}
    </motion.div>
  );
};

export default ContactsSection;
