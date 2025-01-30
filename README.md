# Happy Digital Website

This project contains the implementation for the Happy Digital website.

## Project Structure

```
project-root/
├── src/
│   ├── assets/
│   │   └── icons/
│   │       ├── ui/              # Interface elements
│   │       └── services/        # Service-specific icons
│   │   ├── js/
│   │   │   ├── components/         # Reusable UI components
│   │   │   ├── modules/           # Feature-specific business logic
│   │   │   └── main.js           # JavaScript entry point
│   │   ├── styles/
│   │   │   └── main.css          # Main stylesheet
│   │   └── index.html            # Entry point HTML
│   ├── dist/                     # Build output
│   ├── package.json             # Project configuration
│   ├── vite.config.js          # Vite configuration
│   └── README.md               # Project documentation
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Development:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Features

- Modern build setup with Vite
- ES modules for better code organization
- SVG icons with dynamic coloring using currentColor
- Optimized for production
- Development with hot module replacement

# Webflow Custom Scripts

A collection of custom JavaScript enhancements for Webflow websites.

## Quick Start

Add this single script tag to your Webflow project's Custom Code section (in Footer Code):

```html
<script src="https://cdn.jsdelivr.net/gh/studiostarum/happydigital@v1.2.1/dist/webflow-bundle.min.js"></script>
```

## Features

### Course Accordion
Automatically expands the current page's section in the course navigation sidebar.
- Finds current page using `.course_sublink.w--current`
- Expands the corresponding accordion section
- Rotates the accordion icon

### Custom Select Dropdowns
Creates interactive, responsive custom dropdown selects.
- Handles multiple dropdown groups
- Smart overflow positioning
- Smooth open/close animations
- Closes other dropdowns when one is opened

Required HTML attributes:
- `data-form-element="select"` - On the select trigger element
- `data-form-group="groupName"` - On both select and dropdown elements
- `data-form-element="dropdown"` - On the dropdown container

### Category Index
Automatically numbers category cards with leading zeros (01, 02, etc.).
- Updates numbers dynamically using MutationObserver
- Compatible with Finsweet CMS filters
- Target elements: `.category-card_index`

## Development

### Prerequisites
- Node.js and npm installed
- Git for version control

### Project Structure
```
├── src/
│   ├── index.js           # Main entry point
│   ├── courseAccordion.js # Course navigation functionality
│   ├── customSelect.js    # Custom select dropdowns
│   └── categoryIndex.js   # Category card numbering
├── dist/
│   └── webflow-bundle.min.js  # Bundled and minified output
├── package.json
└── webpack.config.js
```

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/studiostarum/happydigital.git
   cd happydigital
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Commands
- Build the bundle:
  ```bash
  npm run build
  ```
- Watch for changes during development:
  ```bash
  npm run watch
  ```

### Deployment Process
1. Make changes to files in the `src` directory
2. Build the bundle:
   ```bash
   npm run build
   ```
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Your change description"
   ```
4. Create a new version tag:
   ```bash
   git tag -a v1.x.x -m "Version description"
   ```
5. Push to GitHub:
   ```bash
   git push origin main --tags
   ```
6. Update the script URL in your Webflow site to use the new version

## Browser Support
- Requires modern browsers with support for:
  - ES6 features
  - DOM manipulation
  - MutationObserver
  - requestAnimationFrame

## Version History

- v1.2.1: Reorganize into modules with webpack bundling
- v1.0.0: Initial release with individual scripts
