# Reaviz Starter App

A comprehensive Next.js starter application showcasing the complete Reaviz ecosystem for building modern data visualization and UI applications.

## 🚀 What's Included

This starter app demonstrates the full suite of Reaviz libraries:

- **[Reaviz](https://github.com/reaviz/reaviz)** - Advanced data visualization charts and graphs
- **[Reablocks](https://github.com/reaviz/reablocks)** - Modern React UI component library
- **[Reagraph](https://github.com/reaviz/reagraph)** - Interactive network and graph visualizations
- **[Reachat](https://github.com/reaviz/reachat)** - Chat and messaging components

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Latest React features

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/reaviz-starter-app.git
cd reaviz-starter-app
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 📜 Available Scripts

### Development
- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

### Release Management
- `pnpm changeset` - Create a new changeset (for version bumps)
- `pnpm changeset:version` - Apply changesets and update versions
- `pnpm changeset:publish` - Publish packages to npm
- `pnpm release` - Build and publish (used in CI)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── demo/              # Demo components (safe to delete)
│       ├── BackgroundChart.tsx
│       ├── HeroSection.tsx
│       └── PackageGrid.tsx
└── data/                  # Sample data for demonstrations
    └── chartData.ts
```

**Note:** The components in `src/components/demo/` are demonstration examples that you can safely delete when building your own application.

## 🔄 Automatic Versioning & Dependency Management

This starter app includes automated tools to manage versions and keep dependencies up to date:

### Semantic Versioning with Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for semantic versioning:

1. **Create a changeset** when making changes:
   ```bash
   pnpm changeset
   ```
   This will prompt you to describe your changes and select the appropriate version bump (major, minor, patch).

2. **Version and publish** (automated via GitHub Actions):
   - When changesets are merged to `main`, GitHub Actions automatically creates a PR with version bumps
   - Merging that PR triggers an automated release

### Automated Dependency Updates with Renovate

[Renovate](https://renovatebot.com/) automatically creates PRs to update dependencies:

- **Reaviz ecosystem updates** (reaviz, reablocks, reagraph, reachat) - Grouped weekly on Mondays
- **React ecosystem updates** - Grouped weekly
- **Next.js updates** - Grouped weekly  
- **Development tools** - Auto-merged for patch/minor updates
- **Security updates** - Immediately auto-merged

Configuration is in `renovate.json` and can be customized as needed.

## 🎨 Featured Components

### Reaviz Charts
- Interactive data visualizations
- Responsive design
- Customizable themes
- Multiple chart types (bar, line, area, pie, etc.)

### Reablocks UI
- Modern component library
- Consistent design system
- Accessible components
- Dark/light theme support

### Reagraph Networks
- Interactive network graphs
- Force-directed layouts
- Node and edge customization
- Zoom and pan controls

### Reachat Messaging
- Chat interfaces
- Message components
- Real-time styling
- Customizable themes

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/reaviz-starter-app)

### Manual Deployment

1. Build the application:
   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## 📚 Learn More

- [Reaviz Documentation](https://reaviz.io/)
- [Reablocks Documentation](https://reablocks.dev/)
- [Reagraph Documentation](https://reagraph.dev/)
- [Reachat Documentation](https://reachat.dev/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help getting started, please:

- Check the [documentation](https://reaviz.io/)
- Open an [issue](https://github.com/your-username/reaviz-starter-app/issues)
- Join our [Discord community](https://discord.gg/reaviz)
