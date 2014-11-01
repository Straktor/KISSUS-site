module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./assets/less"],
                    yuicompress: true
                },
                files: {
                    "./assets/css/bootstrap.css": "./assets/less/bootstrap/bootstrap.less",
                    "./assets/css/style.css": "./assets/less/core/style.less",
                    "./assets/css/theme-dark.css": "./assets/less/themes/theme-dark.less",
                    "./assets/css/theme-light.css": "./assets/less/themes/theme-light.less"
                }
            }
        },
        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: './assets/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: './assets/css/',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            files: [
                "./assets/less/bootstrap/*",
                "./assets/less/core/*",
                "./assets/less/themes/*"
            ],
            tasks: ["less", "cssmin"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
