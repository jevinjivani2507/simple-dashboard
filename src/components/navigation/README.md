# Modular Navigation System

A flexible, tree-like navigation component system built with React and TypeScript, designed to match modern sidebar navigation patterns.

## Components

### NavItem

The basic building block for individual navigation items.

**Features:**

- Expandable/collapsible items with children
- Custom icons support
- Active state highlighting
- Click handlers
- Nested indentation levels

**Props:**

```typescript
interface NavItemProps {
  item: NavItemData;
  level?: number;
  onItemClick?: (item: NavItemData) => void;
  className?: string;
}
```

### NavSection

Groups related navigation items under a section title.

**Features:**

- Section titles with consistent styling
- Spacing between sections
- Click handler propagation

**Props:**

```typescript
interface NavSectionProps {
  title: string;
  items: NavItemData[];
  onItemClick?: (item: NavItemData) => void;
  className?: string;
}
```

### NavSidebar

The main navigation component that combines sections and items.

**Features:**

- Pre-configured navigation structure matching common patterns
- Dashboard and Pages sections
- Expandable User Profile section
- Icon integration

**Props:**

```typescript
interface NavSidebarProps {
  onItemClick?: (item: NavItemData) => void;
  className?: string;
}
```

## Data Structure

```typescript
interface NavItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavItemData[];
  isActive?: boolean;
}
```

## Usage Examples

### Basic Usage

```tsx
import { NavSidebar } from "@/components/navigation";

function MyComponent() {
  const handleItemClick = (item: NavItemData) => {
    console.log("Clicked:", item);
    // Handle navigation logic
  };

  return <NavSidebar onItemClick={handleItemClick} />;
}
```

### Custom Navigation Data

```tsx
import { NavSection, NavItemData } from "@/components/navigation";

const customItems: NavItemData[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    children: [
      { id: "profile", label: "Profile", href: "/settings/profile" },
      {
        id: "preferences",
        label: "Preferences",
        href: "/settings/preferences",
      },
    ],
  },
];

function CustomNav() {
  return (
    <NavSection
      title="Main Navigation"
      items={customItems}
      onItemClick={(item) => console.log(item)}
    />
  );
}
```

### Individual NavItem Usage

```tsx
import { NavItem, NavItemData } from "@/components/navigation";

const item: NavItemData = {
  id: "dashboard",
  label: "Dashboard",
  icon: <DashboardIcon />,
  href: "/dashboard",
  isActive: true,
};

function SingleItem() {
  return (
    <NavItem
      item={item}
      onItemClick={(item) => console.log("Clicked:", item)}
    />
  );
}
```

## Styling

The components use Tailwind CSS classes and are designed to work with your existing design system. Key styling features:

- Consistent spacing and typography
- Hover and focus states
- Active item highlighting
- Responsive design
- Customizable through className props

## Icons

The system includes pre-configured icons from Phosphor Icons:

- Dashboard icons (ChartPie, ShoppingBag, Folder, BookOpen)
- Page icons (User, Gear, Users, Article, ChatCircle)
- Navigation icons (CaretRight, CaretDown)

You can easily extend or replace these icons by modifying the `NavigationIcons` object.

## Integration

The navigation system integrates seamlessly with:

- Next.js routing
- State management (Zustand, Redux, etc.)
- Animation libraries (Framer Motion)
- Design systems (shadcn/ui, etc.)

## Accessibility

The components include proper accessibility features:

- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure
