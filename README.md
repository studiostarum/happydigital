# Webflow Custom Scripts

This repository contains custom JavaScript files for enhancing Webflow functionality.

## Available Scripts

1. **Course Accordion** (`course-accordion.js`)
   - Automatically expands the current page's section in the course navigation sidebar
   ```html
   <script src="https://cdn.jsdelivr.net/gh/studiostarum/happydigital@v1.0.0/course-accordion.js"></script>
   ```

2. **Custom Select** (`custom-select.js`)
   - Enhances form select elements with custom styling and positioning
   - Handles dropdown positioning and overflow
   ```html
   <script src="https://cdn.jsdelivr.net/gh/studiostarum/happydigital@v1.0.0/custom-select.js"></script>
   ```

3. **Category Index** (`category-index.js`)
   - Automatically numbers category cards with leading zeros (01, 02, etc.)
   - Updates numbers when items are filtered or added
   - Compatible with Finsweet CMS filters
   ```html
   <script src="https://cdn.jsdelivr.net/gh/studiostarum/happydigital@v1.0.0/category-index.js"></script>
   ```

## Usage in Webflow

Add the desired script tags to your Webflow project's Custom Code section (in Footer Code).

## Updating Scripts

1. Make your changes to the desired script file
2. Stage your changes:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "Your update message"
   ```
4. Push to GitHub:
   ```bash
   git push
   ```
5. Create a new version tag (increment the version number):
   ```bash
   git tag -a v1.0.1 -m "Your tag message"
   ```
6. Push the new tag:
   ```bash
   git push origin v1.0.1
   ```
7. Update the script URLs in Webflow to use the new version number

## Version History

- v1.0.0: Initial release
  - Basic accordion functionality for course navigation
  - Custom select dropdown implementation
  - Category indexing with Finsweet integration
