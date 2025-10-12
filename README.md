## 🚀 Simple Dashboard

A **modern, feature-rich admin dashboard** built with **Next.js** — designed for performance, scalability, and an exceptional user experience.  
Includes **real-time analytics**, **project management tools**, and a **sleek, responsive interface** that adapts seamlessly across devices.

🔗 **[Live Demo →](https://simple-dashboard-alpha.vercel.app/)**  
🔗 **[Video →](https://youtu.be/5X2ginDOguQ)**  


### 📸 Screenshots

| ![Dashboard Overview](https://github.com/user-attachments/assets/d57bfc3e-039d-4e1d-bbf7-24029090fc68) | ![Analytics View](https://github.com/user-attachments/assets/7211a2f7-74c6-4e65-a4c9-8a7768f11617) |
|:--:|:--:|
| *Dashboard Overview (Light)* | *Dashboard Overview (Dark)* |

| ![Project Board](https://github.com/user-attachments/assets/e095c3d4-febc-4f8d-a937-2c69498465c7) | ![Team Management](https://github.com/user-attachments/assets/455c140a-8592-42b8-afa8-e1644706bc8b) |
|:--:|:--:|
| *Project Management Board (Dark)* | *Project Management Board (Light)* |

---

## 🚀 Features

### Dashboard

- **Analytics Charts**: Interactive charts for projections vs actuals, revenue trends, and sales distribution
- **Revenue by Location**: Visual map-based revenue tracking across different regions
- **Real-time Stats**: Live metrics and KPIs displayed in an intuitive layout

### Project Management

- **Order List Table**: Comprehensive data table with sorting, filtering, and pagination
- **Smart Search**: Global search across all order fields
- **Status Filtering**: Multi-select status filters with visual badges
- **Column Sorting**: Sort by order ID, user, project, date, or status
- **Animated Transitions**: Smooth page transitions and table updates

### UI/UX

- **Dark/Light Mode**: System-wide theme toggle with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Collapsible Sidebar**: Space-efficient navigation with favorites and recent items
- **Dynamic Breadcrumbs**: Context-aware navigation trail
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Command Palette**: Quick navigation with Cmd+K (Mac) / Ctrl+K (Windows)

### Additional Features

- **Contacts Section**: Activity timeline with notifications and user avatars
- **Work in Progress Pages**: Placeholder routes for future features
- **Auto-expand Navigation**: Smart sidebar state management

## 🛠️ Tech Stack

### Core

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

### UI Components

- **Shadcn/ui** - High-quality, accessible components
- **Phosphor Icons** - Flexible icon library
- **Framer Motion** - Animation library
- **Recharts** - Chart visualization

### State & Data

- **Zustand** - Lightweight state management
- **TanStack Table** - Powerful data table solution
- **Moment.js** - Date formatting and manipulation

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd juspay

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📁 Project Structure

```
juspay/
├── src/
│   ├── app/                    # Next.js app routes
│   │   ├── dashboard/          # Dashboard page
│   │   ├── projects/           # Projects/order list page
│   │   │   ├── components/     # Projects-specific components
│   │   │   ├── data/           # Sample data
│   │   │   ├── types/          # TypeScript types
│   │   │   └── utils/          # Helper functions
│   │   └── layout.tsx          # Root layout with providers
│   ├── components/
│   │   ├── dashboard/          # Dashboard-specific components
│   │   ├── home/               # Navbar, sidebar, contacts
│   │   ├── navigation/         # Navigation system
│   │   └── ui/                 # Reusable UI components
│   ├── constants/              # Configuration and data
│   └── lib/                    # Utilities and stores
├── public/                     # Static assets
└── package.json
```

## 🎨 Key Components

### Dashboard Components

- `ProjectionVsActualsChart` - Bar chart comparing projections and actuals
- `RevenueChart` - Dual-line chart for current vs previous week revenue
- `TotalSalesChart` - Donut chart with sales breakdown by category
- `SellingTable` - Top-selling products overview
- `RevenueByLocations` - Geographic revenue distribution

### Projects Components

- `ProjectsTable` - Full-featured data table with TanStack Table
- `FilterDropdown` - Status filter with checkboxes
- `SortDropdown` - Multi-column sorting interface
- `ActiveStatusSection` - Visual display of active filters

### Navigation Components

- `NavSidebar` - Main navigation with sections
- `TabSection` - Favorites/Recently tabs with animations
- `BreadcrumbNav` - Dynamic page breadcrumbs

## 🎯 Features in Detail

### Filtering System

- Click filter icon to open dropdown
- Select/deselect statuses via checkboxes
- Active filters shown as removable badges
- "Clear All" option to reset filters
- Toggle button shows active state

### Sorting System

- Click sort icon to open dropdown
- Choose column and direction (ascending/descending)
- Active sort highlighted in dropdown
- Toggle button shows active state
- Clear sort option available

### Search Functionality

- Global search across all fields
- Real-time filtering as you type
- Works alongside filters and sorting
- Magnifying glass icon indicator

### Theme System

- Toggle between light and dark modes
- Persistent preference via localStorage
- Smooth transition animations
- System-wide color scheme updates

## 🚧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Environment

- **Node.js**: 18.x or higher
- **Package Manager**: npm

## 🤝 Contributing

This is an assignment project. For questions or feedback, please contact the developer.

## 📄 License

This project is part of an assignment for Juspay.

---

Built with ❤️ using Next.js and modern web technologies.
