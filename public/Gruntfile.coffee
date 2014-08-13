module.exports = ->

  # Load task configurations.
  @loadTasks "build/tasks"

  # Run JSHint and a quick test.
  # @registerTask "test", [
    # "jshint"
    # "karma:run"
  # ]

  @registerTask "development", [
    "less:dev"
    "watch:css"
  ]

  # When running the default Grunt command, just lint the code.
  @registerTask "default", [
    "clean"
    # "jshint"
    "uglify"
    "copy"
    "less:release"
    "cssmin"
    "hub"
  ]
