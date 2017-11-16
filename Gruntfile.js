module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug: {
            compile: {
                options: {
                    pretty: true
                },
                files:[{
                    cwd: 'templates/',
                    src: '*.pug',
                    dest: 'views/',
                    expand: true,
                    ext: '.html'
                }]
            }
        },

        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'css/main.css'
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'css/main.scss'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            css: {
                files: 'css/**/*.scss',
                tasks: ['sass']
            },
            pug: {
                files: 'templates/**/*.pug',
                tasks: ['pug']
            },
            postcss: {
                files: 'css/main.css',
                tasks: ['postcss:dist']
            }
        }

    });
    grunt.registerTask('compile', 'Compile pug, sass and minify css', ['pug','sass','postcss:dist', 'watch']);
};
