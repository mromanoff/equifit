module.exports = ->
  @loadNpmTasks "grunt-contrib-jst"


  # Post code coverage results to Coveralls for tracking.
  @config "jst",

    compile:
      files:
        "dist/templates.min.js": ["app/templates/**/*.html"]






