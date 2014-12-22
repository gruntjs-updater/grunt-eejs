/*
 * grunt-eejs
 * https://github.com/christophwitzko/grunt-eejs
 *
 * Copyright (c) 2014 Christoph Witzko
 * Licensed under the MIT license.
 */

'use strict'

var ejs = require('ejs')
var chalk = require('chalk')

module.exports = function(grunt) {
  var defaultFunctions = {
    titlesConfigName: 'titles',
    today: function(){return grunt.template.today('yyyy-mm-dd')},
    date: function(){return grunt.template.today('yyyy-mm-dd HH:MM:ss')},
    year: function(){return grunt.template.today('yyyy')},
    author: function(){return grunt.config.get('pkg.author')},
    version: function(){return grunt.config.get('pkg.version')},
    homepage: function(){return grunt.config.get('pkg.homepage')},
    getPkg: function(key){return grunt.config.get('pkg.' + key)},
    getConfig: function(key){return grunt.config.get(key)}
  }
  grunt.registerMultiTask('eejs', 'render ejs templates', function() {
    var options = this.options(defaultFunctions)
    var titles = grunt.config.getRaw(options.titlesConfigName) || {}
    this.files.forEach(function(f) {
      var out = f.src.map(grunt.file.read).join('')
      options.filename = f.src.pop()
      options.title = titles[options.filename]
      grunt.file.write(f.dest, ejs.render(out, options))
      grunt.log.writeln('File ' + chalk.cyan(f.dest) + ' created.')
    })
  })
}
