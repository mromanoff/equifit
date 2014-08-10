module.exports = ->
  @loadNpmTasks "grunt-contrib-less"

  @config "less",
    dev:
      options:
        strictImports: true
        sourceMap: true
        outputSourceFiles: true
      files:
        "styles/index.css": "less/manifest.less"

    release:
      files:
        "styles/index.css": "less/manifest.less"





