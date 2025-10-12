import { NavItemData } from "@/components/navigation";
import { NavigationIcons } from "@/components/navigation/navigation-icons";

export const tabsData = [
  {
    id: "favorites",
    label: "Favorites",
    items: [
      { id: "overview", label: "Overview", href: "/user-profile/overview" },
      { id: "projects", label: "Projects", href: "/projects" },
    ],
  },
  {
    id: "recently",
    label: "Recently",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard" },
      { id: "account", label: "Account", href: "/account" },
    ],
  },
];

export const dashboardItems: NavItemData[] = [
  {
    id: "default",
    label: "Default",
    icon: NavigationIcons.default,
    href: "/dashboard",
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    icon: NavigationIcons.ecommerce,
    children: [
      {
        id: "ecommerce-default",
        label: "Default",
        href: "/dashboard/ecommerce",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: NavigationIcons.projects,
    href: "/projects",
  },
  {
    id: "courses",
    label: "Online Courses",
    icon: NavigationIcons.courses,
    children: [
      {
        id: "courses-default",
        label: "Default",
        href: "/dashboard/courses",
      },
    ],
  },
];

export const pageItems: NavItemData[] = [
  {
    id: "user-profile",
    label: "User Profile",
    icon: NavigationIcons.userProfile,
    children: [
      {
        id: "overview",
        label: "Overview",
        href: "/user-profile/overview",
      },
      {
        id: "user-profile-projects",
        label: "Project",
        href: "/user-profile/projects",
      },
      {
        id: "campaigns",
        label: "Campaigns",
        href: "/user-profile/campaigns",
      },
      {
        id: "documents",
        label: "Documents",
        href: "/user-profile/documents",
      },
      {
        id: "followers",
        label: "Followers",
        href: "/user-profile/followers",
      },
    ],
  },
  {
    id: "account",
    label: "Account",
    icon: NavigationIcons.account,
    children: [
      {
        id: "account-default",
        label: "Default",
        href: "/account",
      },
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: NavigationIcons.corporate,
    children: [
      {
        id: "corporate-default",
        label: "Default",
        href: "/corporate",
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    icon: NavigationIcons.blog,
    children: [
      {
        id: "blog-default",
        label: "Default",
        href: "/blog",
      },
    ],
  },
  {
    id: "social",
    label: "Social",
    icon: NavigationIcons.social,
    children: [
      {
        id: "social-default",
        label: "Default",
        href: "/social",
      },
    ],
  },
];
