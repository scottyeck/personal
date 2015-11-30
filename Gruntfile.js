'use strict';

var loadTasks = require('load-grunt-tasks');

module.exports = function(grunt) {

	loadTasks(grunt);

	grunt.initConfig({
		sass: {
			options: {
				sourceComments: true
			},
			dist: {
				files: {
					'public/css/screen.css': 'public/scss/screen.scss'
				}
			}
		},

		watch: {
			sass: {
				files: ['public/scss/**/*.scss'],
				tasks: ['sass']
			}
		}
	});

	grunt.registerTask('build', [
		'sass'
	]);

	grunt.registerTask('poll', [
		'watch:sass'
	]);

	grunt.registerTask('dev', [
		'build',
		'poll'
	]);
};