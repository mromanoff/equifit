module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                footer:'\n' + '/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
                //mangle: false,
                //compress:false,
                //beautify:true
            },
//            app: {
//                options: {
//                    sourceMap: function (path) {
//                        return path + '.map';
//                    },
//                    sourceMappingURL: 'app.min.js.map',
//                    sourceMapRoot: 'http://local-phoenix.equinox.com/assets/'
//                },
//                src: [
//                    'js/app.js',
//                    'js/app/pages/**/*.js',
//                    'js/app/*.js',
//                    'js/app/eof.js'
//                ],
//                dest: 'js/app.min.js'
//            },
//            lib: {
//                options: {
//                    sourceMap: function (path) {
//                        return path + '.map';
//                    },
//                    sourceMappingURL: 'lib.min.js.map',
//                    sourceMapRoot: 'http://local-phoenix.equinox.com/assets/'
//                },
//                src: [
//                    'js/lib/**/*.js'
//                ],
//                dest: 'js/lib.min.js'
//            },
            bootstrap: {
                options: {
                    sourceMap: function (path) {
                        return path + '.map';
                    },
                    sourceMappingURL: 'vendor.min.js.map',
                    sourceMapRoot: 'http://local-phoenix.equinox.com/assets/'
                },
                src: [
                    'bower_components/bootstrap/js/bootstrap-affix.js',
                    'bower_components/bootstrap/js/bootstrap-alert.js',
                    'bower_components/bootstrap/js/bootstrap-button.js',
                    'bower_components/bootstrap/js/bootstrap-carousel.js',
                    'bower_components/bootstrap/js/bootstrap-collapse.js',
                    'bower_components/bootstrap/js/bootstrap-dropdown.js',
                    'bower_components/bootstrap/js/bootstrap-modal.js',
                    'bower_components/bootstrap/js/bootstrap-popover.js',
                    'bower_components/bootstrap/js/bootstrap-scrollspy.js',
                    'bower_components/bootstrap/js/bootstrap-tab.js',
                    'bower_components/bootstrap/js/bootstrap-tooltip.js',
                    'bower_components/bootstrap/js/bootstrap-transition.js',
                    'bower_components/bootstrap/js/bootstrap-typeahead.js'
                ],
                dest: 'dist/bootstrap.min.js'
            }
//            components: {
//                files: [{
//                    expand: true,
//                    cwd: 'js/app/components',
//                    src: '*.js',
//                    dest: 'js/app/components/min'
//                }]
//            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', [
        'uglify'
    ]);

};