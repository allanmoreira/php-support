pipeline {
    agent none
    environment {
        APACHE_PATH = '/var/www/html/php-support'
    }
    stages {
        stage ('Deploy') {
            agent any
            steps {
                script {
                    sh "rm -r ${APACHE_PATH}/* || true"
                    sh "cp -r config/ ${APACHE_PATH}"
                    sh "cp -r getnet/ ${APACHE_PATH}"
                    sh "cp -r service/ ${APACHE_PATH}"
                    sh "cp -r static/ ${APACHE_PATH}"
                    sh "cp -r templates/ ${APACHE_PATH}"
                    sh "cp *.php ${APACHE_PATH}"
                }
            }
        }
    }
}