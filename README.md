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

# Course Accordion Component

A lightweight, accessible accordion component for course navigation sidebars. This component provides smooth animations, keyboard navigation, and maintains the current section's state.

## Features

- 🎯 Automatically opens the current section
- 🔄 Smooth animations for opening/closing
- 🎨 Rotating arrow indicators
- ⌨️ Keyboard accessible
- 📱 Mobile-friendly
- 🔒 Data attribute based selectors (resistant to class name changes)

## Usage

### 1. HTML Structure

Add the following data attributes to your HTML:

```html
<div class="course_sidebar-accordion" data-accordion>
    <!-- Clickable header -->
    <div class="course_link-wrapper" data-accordion-trigger>
        <div class="course_link-text">
            <!-- Your section title -->
        </div>
        <!-- Arrow icon -->
        <div class="course_link-icon" data-accordion-icon>
            <!-- Your arrow SVG -->
        </div>
    </div>
    <!-- Expandable content -->
    <div class="course_sublinks-wrapper" data-accordion-content>
        <!-- Your accordion content -->
        <a href="/your-link" class="course_sublink" data-accordion-link>
            Link Text
        </a>
    </div>
</div>
```

### 2. Required Data Attributes

- `data-accordion`: Container for the entire accordion section
- `data-accordion-trigger`: Clickable element that toggles the accordion
- `data-accordion-icon`: Icon element that rotates when toggled
- `data-accordion-content`: Content wrapper that expands/collapses
- `data-accordion-link`: Links within the accordion content

### 3. JavaScript Integration

```javascript
// Import the accordion module
import { initCourseAccordion } from './modules/courseAccordion';

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCourseAccordion();
});
```

### 4. CSS Requirements

The component expects these base styles to work properly:

```css
[data-accordion-content] {
    transition: height 0.3s ease;
    overflow: hidden;
}

[data-accordion-icon] {
    transition: transform 0.3s ease;
}
```

## Functionality

- Automatically opens the section containing the current page (marked with `.w--current`)
- Closes other sections when opening a new one
- Smooth height transitions for content
- Smooth rotation for arrow indicators
- Maintains open/closed state using `data-open` attribute

## Browser Support

Works in all modern browsers that support:
- CSS transitions
- CSS transforms
- ES6 JavaScript
- `closest()` DOM method
- `querySelector/querySelectorAll`

## License

MIT License - Feel free to use in your projects
