module.exports = function (grunt) {
    grunt.initConfig({
        name: 'class',
        watch: {
            files: ['**.js', '**.css'],
            task: ['updated']
        },
        uglify: {
            build: {
                src: ['src/index.js', 'src/logger.js'],
                dest: 'dist/bundle.js'
            }
        },
        babel: {
            options: {
                presets: ['env']
            },
            build: {
                src: ['src/index.js', 'src/logger.js'],
                dest: ['build/index.js', 'build/index.js']
            }
        }
    });

   

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('updated', () => {
        grunt.log.writeln(`It updated!`)
    });
    grunt.registerTask('default', () => {
        grunt.log.writeln(`Hello,${grunt.config.get('name')}!`)
    });

};