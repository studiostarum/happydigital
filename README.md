# Course Accordion Script

This repository contains the JavaScript code for the course navigation accordion used in the Webflow site.

## Usage in Webflow

Add this script tag to your Webflow project's Custom Code section (in Footer Code):

```html
<script src="https://cdn.jsdelivr.net/gh/studiostarum/happydigital@v1.0.0/course-accordion.js"></script>
```

## Updating the Script

1. Make your changes to `course-accordion.js`
2. Stage your changes:
   ```bash
   git add course-accordion.js
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
7. Update the script URL in Webflow to use the new version number:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/studiostarum/happydigital@v1.0.1/course-accordion.js"></script>
   ```

## Version History

- v1.0.0: Initial release - Basic accordion functionality for course navigation
