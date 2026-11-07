# Okotoks Pizza

Historical pizza website project using PHP/HTML, SCSS, JavaScript, and Gulp.

## Repository layout

- `index.php`, `menu.html`, `location.html` — website pages
- `scss/`, `css/` — styles
- `images/`, `video/` — assets
- `Gulpfile.js` — build tasks
- `app.json` — historical deployment configuration

## Development

The `package.json` lists Gulp 3 and `gulp-sass` development dependencies. These are legacy tools and may not work with current Node.js versions. Review the source and dependencies before attempting a build or deployment.

## Maintenance notes

- `node_modules/` is currently tracked; remove it in a separate reviewed change after validating the build.
- Review the PHP and deployment configuration before exposing the site publicly.
- The old Heroku URL in repository metadata may no longer be available.

## Status

Historical personal learning project. No current deployment or build compatibility is claimed.
