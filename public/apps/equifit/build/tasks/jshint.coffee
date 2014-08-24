module.exports = ->
  @loadNpmTasks "grunt-contrib-jshint"

  # Run your source code through JSHint's defaults.
  @config "jshint",
    options:
      jshintrc: '../../.jshintrc'
    build:
      src: [
        "app/**/*.js"
        "test/jasmine/**/*.js"
      ]
