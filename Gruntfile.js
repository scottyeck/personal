'use strict';

var loadTasks = require('load-grunt-tasks');

module.exports = function(grunt) {

	loadTasks(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'public/css/screen.css': 'public/scss/screen.scss'
				}
			}
		}
	});
}