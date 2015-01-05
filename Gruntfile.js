/*
 * grunt-eejs
 * https://github.com/christophwitzko/grunt-eejs
 *
 * Copyright (c) 2015 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dest'],
    pkg: grunt.file.readJSON('package.json'),
    titles: {'test/test.ejs': 'TEST'},
    eejs: {
      options: {
        hello: function(name){return 'Hello ' + name + '!'}
      },
      all: {
        files: {
          'dest/test.html': 'test/test.ejs',
        }
      }
    }
  })

  grunt.loadTasks('tasks')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['clean', 'eejs'])
}
