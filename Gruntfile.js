/*
 * grunt-eejs
 * https://github.com/christophwitzko/grunt-eejs
 *
 * Copyright (c) 2014 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dest'],
    pkg: grunt.file.readJSON('package.json'),
    titles: {'test/test.ejs': 'TEST'},
    eejs: {
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
