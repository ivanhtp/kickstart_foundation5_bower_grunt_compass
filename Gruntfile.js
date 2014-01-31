module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Limpeza do diretório build
        clean: ['build', 'development/img', 'development/common/css'],

        // Compressão JavaScript
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            dev: {
                // foundation
                files: [
                    {
                        src: [
                            'bower_components/foundation/js/foundation/foundation.js',
                            'bower_components/foundation/js/foundation/foundation.topbar.js',
                        ],
                        dest: 'development/lib/foundation/foundation.min.js'
                    }
                ]
            },
            dist: {
                options: {
                    mangle: false
                },
                files: [
                    // Admin
                    {
                        src: 'development/js/app.js',
                        dest: 'build/<%= pkg.name %>/<%= pkg.version %>/js/app.js'
                    }
                ]
            }
        },

        // Pré-processamento e compressão CSS
        compass: {
            dev: {
                options: {
                    sassDir: 'scss',
                    imagesDir: 'img',
                    cssDir: 'development/css',
                    javascriptsDir: 'development/lib',
                    httpGeneratedImagesPath: '/img',
                    noLineComments: true
                }
            },
            dist: {
                options: {
                    sassDir: 'scss',
                    imagesDir: 'img',
                    cssDir: 'build/<%= pkg.name %>/<%= pkg.version %>/css',
                    javascriptsDir: 'build/<%= pkg.name %>/<%= pkg.version %>/lib',
                    httpGeneratedImagesPath: 'build/<%= pkg.name %>/<%= pkg.version %>/img',
                    noLineComments: true,
                    outputStyle: 'compressed'
                }
            }
        },

        // Compressão HTML
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    // Admin
                    {
                        src: 'development/*.html',
                        dest: 'build/<%= pkg.name %>/<%= pkg.version %>/*.html'
                    }
                ]
            }
        },

        // Copia dos arquivos
        copy: {
            dev: {
                files: [
                    // Sprites
                    {
                        expand: true,
                        src: ['img/*.png'],
                        dest: 'development/'
                    }
                ]
            },
            dist: {
                files: [
                    // Arquivos de terceiros
                    {
                        expand: true,
                        cwd: 'development',
                        src: ['3rd/**/*'],
                        dest: 'build/<%= pkg.name %>/<%= pkg.version %>'
                    },

                    // Sprites
                    {
                        expand: true,
                        cwd: 'development',
                        src: ['img/**/*'],
                        dest: 'build/<%= pkg.name %>/<%= pkg.version %>'
                    }
                ]
            }
        },


        // Deploy via FTP
        'ftp-deploy': {
            build: {
                auth: {
                    host: '<%= pkg.httpServer.host %>',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'build/<%= pkg.name %>',
                dest: '<%= pkg.name %>'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    // Não modificar a ordem de execução a não ser que você saiba o que está fazendo...
    grunt.registerTask('default', ['clean', 'uglify', 'compass', 'htmlmin', 'copy']);

};