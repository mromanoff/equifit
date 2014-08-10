module.exports = ->
  @loadNpmTasks "grunt-contrib-watch"

  # Wipe out previous builds and test reporting.
  @config "watch",
    css:
      files: ['less/**/*.less']
      tasks: ['less:dev']



