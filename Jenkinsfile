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
                    sh: "rm -r ${APACHE_PATH}/*"
                    sh: "cp getnet/ ${APACHE_PATH}"
                    sh: "cp static/ ${APACHE_PATH}"
                    sh: "cp templates/ ${APACHE_PATH}"
                    sh: "cp *.php ${APACHE_PATH}"
                }
            }
        }
    }
}