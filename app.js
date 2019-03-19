const browserSync = require("browser-sync").create();

browserSync.init({
    injectChanges: true,
    files: ["./**/*.{html,css,js}"],
    server: "./"
});