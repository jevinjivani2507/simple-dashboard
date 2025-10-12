import {
  ChartPieIcon,
  ShoppingBagIcon,
  FolderIcon,
  BookOpenIcon,
  UserIcon,
  GearIcon,
  UsersIcon,
  ArticleIcon,
  ChatCircleIcon,
} from "@phosphor-icons/react";

export const NavigationIcons = {
  // Dashboard icons
  default: <ChartPieIcon weight="duotone" size={24} />,
  ecommerce: <ShoppingBagIcon weight="duotone" size={24} />,
  projects: <FolderIcon weight="duotone" size={24} />,
  courses: <BookOpenIcon weight="duotone" size={24} />,

  // Page icons
  userProfile: <UserIcon weight="duotone" size={24} />,
  account: <GearIcon weight="duotone" size={24} />,
  corporate: <UsersIcon weight="duotone" size={24} />,
  blog: <ArticleIcon weight="duotone" size={24} />,
  social: <ChatCircleIcon weight="duotone" size={24} />,
};
