module.exports = function(grunt) {

  // configure the plugins
  grunt.initConfig({
      tishadow: {
          run: {
            command: 'run',
            options: {
              update: true,
              patch: true,
              preclear: true
            }
          },
      }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-titanium');
  grunt.loadNpmTasks('grunt-alloy');
  grunt.loadNpmTasks('grunt-tishadow');

  grunt.registerTask('default', ['titanium', 'alloy', 'tishadow']);
};
