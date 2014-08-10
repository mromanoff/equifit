module.exports = ->
  @loadNpmTasks "grunt-contrib-less"

  @config "less",
    development:
      options:
        dumpLineNumbers: false # "mediaquery"
        # paths: ["styles"]

      files:
        "styles/index.css": "less/manifest.less"

      # production:
        # options:
          # paths: ["assets/css"],
          # cleancss: true,
          # modifyVars:
            # imgPath: '"http://mycdn.com/path/to/images"',
            # bgColor: 'red'


        # files:
          # "path/to/result.css": "path/to/source.less"





