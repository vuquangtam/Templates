module.exports = function(grunt) {
    grunt.initConfig({
        'template': {
            'process-html-template': {
                'options': {
                    'data': {
                        'title': 'My blog post',
                        'author': 'Mathias Bynens',
                        'content': 'Lorem ipsum dolor sit amet.'
                    }
                },
                'files': {
                    'dist/post.html': ['src/post.html.tpl']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-template');
    grunt.registerTask('default', [
        'template'
    ]);
};
