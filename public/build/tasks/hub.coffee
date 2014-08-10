module.exports = ->
  @loadNpmTasks "grunt-hub"

  @config "hub",

      equifit:
        src: ['apps/equifit/Gruntfile.coffee']
        tasks: ['default']