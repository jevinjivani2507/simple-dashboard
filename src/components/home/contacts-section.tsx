"use client";

import { motion, AnimatePresence } from "motion/react";
import { useContactsStore } from "@/lib/store";
import { BugIcon, UserPlusIcon, RadioIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { fadeIn } from "@/lib/animations-utils";

interface Notification {
  icon: "bug" | "user" | "radio";
  title: string;
  time: string;
}

interface Activity {
  id: string;
  title: string;
  time: string;
}

interface Contact {
  id: string;
  name: string;
}

const notifications: Notification[] = [
  { icon: "bug", title: "You have a bug that needs...", time: "Just now" },
  { icon: "user", title: "New user registered", time: "59 minutes ago" },
  { icon: "bug", title: "You have a bug that needs...", time: "12 hours ago" },
  {
    icon: "radio",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activities: Activity[] = [
  { id: "w", title: "You have a bug that needs...", time: "Just now" },
  { id: "b", title: "Released a new version", time: "59 minutes ago" },
  { id: "c", title: "Submitted a bug", time: "12 hours ago" },
  { id: "d", title: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { id: "e", title: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

const contacts: Contact[] = [
  { id: "jane", name: "Natali Craig" },
  { id: "drew", name: "Drew Cano" },
  { id: "c", name: "Orlando Diggs" },
  { id: "d", name: "Andi Lane" },
  { id: "e", name: "Kate Morrison" },
  { id: "koray", name: "Koray Okumus" },
];

const NotificationIcon = ({ type }: { type: "bug" | "user" | "radio" }) => {
  const iconMap = {
    bug: BugIcon,
    user: UserPlusIcon,
    radio: RadioIcon,
  };
  const Icon = iconMap[type];
  return (
    <div className="bg-muted flex size-8 items-center justify-center rounded-md">
      <Icon className="size-5" />
    </div>
  );
};

const ProfileIcon = ({ id }: { id: string }) => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-blue-50">
      <Image
        src={`https://api.dicebear.com/9.x/adventurer/png?seed=${id}`}
        alt={id}
        fill
        className="object-cover"
      />
    </div>
  );
};

const ContactsSection = () => {
  const { isExpanded } = useContactsStore();

  return (
    <motion.div
      className="bg-background border-sidebar-border scrollbar-hide flex flex-col overflow-hidden overflow-y-auto border-l"
      animate={{
        width: isExpanded ? "21rem" : "0",
      }}
      initial={{
        width: isExpanded ? "21rem" : "0",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="flex flex-col gap-8 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Notifications Section */}
            <motion.div {...fadeIn(0)}>
              <h2 className="mb-4 text-xl font-bold">Notifications</h2>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <NotificationIcon type={notification.icon} />
                    <div className="flex-1">
                      <p className="text-foreground text-sm leading-tight font-medium whitespace-nowrap">
                        {notification.title}
                      </p>
                      <p className="text-muted-foreground text-xs whitespace-nowrap">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div {...fadeIn(1)}>
              <h2 className="mb-4 text-xl font-bold">Activities</h2>
              <div className="space-y-2">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-1">
                    <div className="relative flex flex-col items-center">
                      <ProfileIcon id={activity.id} />
                      {index < activities.length - 1 && (
                        <div className="bg-border absolute top-11 h-2 w-px" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground text-sm leading-tight font-medium whitespace-nowrap">
                        {activity.title}
                      </p>
                      <p className="text-muted-foreground text-xs whitespace-nowrap">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contacts Section */}
            <motion.div {...fadeIn(2)}>
              <h2 className="mb-4 text-xl font-bold">Contacts</h2>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ProfileIcon id={contact.id} />
                    <p className="text-foreground text-sm font-medium whitespace-nowrap">
                      {contact.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactsSection;
