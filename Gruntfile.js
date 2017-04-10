//npm install -g grunt-cli
//npm install grunt --save-dev
//npm install grunt-contrib-watch --save-dev
//npm install grunt-contrib-connect --save-dev

//Create a new Gruntfile.js file under the root directory

module.exports = function (grunt){
	grunt.initConfig({
  		//watches for the specified files and executes the task associated to be performed
  		watch : {
  			refresh : {
  				options :{
  					livereload: '<%= connect.options.livereload %>'
  				},
				files : ['js/**/*.js','css/**/*.css','*.html'] //give the list of all files that you want to watch for and reload
			}
		},
  		//serves the application under this configuration
  		connect : {
  			options: {
  				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729
			},
			livereload : {
				options: {
					open: true,
				}
			}
		}
	});

  	//load all Npm tasks
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-connect');

  	//register tasks to be run
  	grunt.registerTask('serve', ['connect:livereload','watch']);

  	//register default tasks to be run
  	grunt.registerTask('default', ['connect:livereload','watch']);

  }