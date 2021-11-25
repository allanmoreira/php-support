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
                    sh "cp -R getnet/ ${APACHE_PATH}"
                    sh "cp -R static/ ${APACHE_PATH}"
                    sh "cp -R templates/ ${APACHE_PATH}"
                    sh "cp *.php ${APACHE_PATH}"
                }
            }
        }
    }
}