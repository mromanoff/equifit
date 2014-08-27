module.exports = ->

  # Load task configurations.
  @loadTasks "build/tasks"

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
