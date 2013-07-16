/**
 * 그런트 빌드 스크립트
 */
module.exports = function (grunt) {

    var path = require('path');

    grunt.initConfig({
        // 패키지 파일
        pkg: grunt.file.readJSON('package.json'),

        // 라이브리로드를 위한 웹서버 설정
        connect: {
            // 개발 과정의 디렉토리를 서빙
            livereload: {
                options: {
                    port: 3000,
                    base: './src',
                    // 커넥트 서버에 미들웨어를 추가한다.
                    middleware: function (connect, options) {
                        // 라이브리로드를 구동을 위한 미들웨어를 생성한다.
                        // https://github.com/gruntjs/grunt-contrib-livereload
                        var lrUtils = require('grunt-contrib-livereload/lib/utils');
                        var lrSnippet = lrUtils.livereloadSnippet;

                        return [
                            lrSnippet,
                            connect.static(path.resolve(options.base))
                        ];
                    }
                }
            }
        },

        // 파일 변경 감시를 위한 왓치 도구
        regarde: {
            development: {
                files: ['src/**/*.js', 'src/**/*.html', 'src/**/*.css'],
                tasks: ['livereload']
            },
            template: {
                files: ['src/tmpl/*.tmpl'],
                tasks: ['handlebars']
            }
        },

        handlebars: {
            tmpl: {
                options: {
                    namespace: 'Tmpl',
                    processName: function (filename) {
                        return path.basename(filename, '.tmpl');
                    }
                },
                files: {
                    'src/tmpl/tmpl.compiled.js': 'src/tmpl/*.tmpl'
                }
            }
        }
    });


    // npm에서 다운로드 받은 태스크를 로드한다.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-dustjs');

    grunt.registerTask('default', '라이브리로드가 적용된 개발 환경을 실행한다.', [
        'handlebars', 'livereload-start', 'connect:livereload', 'regarde'
    ]);

};