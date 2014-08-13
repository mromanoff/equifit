module.exports = ->
  @loadNpmTasks "grunt-contrib-uglify"

  # Wipe out previous builds and test reporting.
  @config "uglify",
    # options:
      # footer:'\n' + '/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
      # mangle: false,
      # compress:false,
      # beautify:true
      bootstrap:
        options:
          sourceMap: (path) -> path + '.map'
          sourceMappingURL: 'bootstrap.min.js.map'
          sourceMapRoot: 'http://0.0.0.0:3000/'

        src: [
          # do not change order.
          # 'bower_components/bootstrap/js/bootstrap-transition.js',
          'bower_components/bootstrap/js/bootstrap-alert.js',
          'bower_components/bootstrap/js/bootstrap-button.js',
          # 'bower_components/bootstrap/js/bootstrap-carousel.js'
          'bower_components/bootstrap/js/bootstrap-collapse.js'
          'bower_components/bootstrap/js/bootstrap-dropdown.js'
          'bower_components/bootstrap/js/bootstrap-modal.js'
          # 'bower_components/bootstrap/js/bootstrap-tooltip.js'
          # 'bower_components/bootstrap/js/bootstrap-popover.js'
          # 'bower_components/bootstrap/js/bootstrap-scrollspy.js'
          # 'bower_components/bootstrap/js/bootstrap-tab.js'
          # 'bower_components/bootstrap/js/bootstrap-typeahead.js'
          # 'bower_components/bootstrap/js/bootstrap-affix.js'
          ]

        dest: 'dist/bootstrap.min.js'





