'use strict';

var
  _gruntRegisterTasks = require('grunt-register-tasks'),
  _loadGruntTasks = require('load-grunt-tasks'),
  _timeGrunt = require('time-grunt');

module.exports = function ( $grunt ) {

  var

    _$grunt__file = $grunt.file,
    _$grunt__file__readJSON = _$grunt__file.readJSON,

    _config = {
        'cfg': _$grunt__file__readJSON('./config/grunt.json'),
        'clean': {
            'build': '<%= grunt.option("release") ? cfg.PATH__DIST : cfg.PATH__BUILD %>',
            'debug': '<%= cfg.PATH__DEBUG %>'
          },
        'copy': {
            'src': {
                'cwd': '<%= cfg.PATH__SRC__SCSS %>',
                'dest': '<%= clean.build %>',
                'expand': true,
                'src': '<%= cfg.GLOB__SCSS__RECURSIVE %>'
              }
          },
        'jsonlint': {
            'manifests': './{bower,package}.json'
          },
        'pkg': _$grunt__file__readJSON('./package.json'),
        'sass': {
            'options': {
              'outputStyle': 'expanded',
              'sourceComments': true,
              'sourceMap': false
              },
            'debug': {
                'cwd': '<%= copy.src.cwd %>',
                'dest': '<%= clean.debug %>',
                'expand': true,
                'ext': '.css',
                'src': '<%= copy.src.src %>'
              }
          }
      },

    _plugins = [
        'grunt-contrib-*',
        'grunt-jsonlint',
        'grunt-sass'
      ],

    _tasks = {
        'build': [
            'default',
            'clean:build',
            'copy:src'
          ],
        'compile': [
            'clean:debug',
            'sass:debug'
          ],
        'default': [
            'jsonlint:manifests'
          ],
        'unbuild': 'clean:build',
        'uncompile': 'clean:debug'
      };

  _timeGrunt( $grunt ),

  $grunt.initConfig( _config ),

  _loadGruntTasks(
    $grunt,
    {
      pattern: _plugins,
      scope: 'devDependencies'
    }
  ),

  _gruntRegisterTasks(
    $grunt,
    _tasks
  );

};
