pipeline {
    agent none
    environment {
        APACHE_PATH = '/var/www/html/php-support'
        //CLEAR_CACHE_URL = 'http://moreirallan.com/planilha_financeira/config/clear_cache'
        POM_XML_FILE = "pom.xml"
        ARTIFACT_ID = ""
        BRANCH_DEFAULT = "master"
    }
    stages {
        stage ('Load pipeline') {
            agent any
            steps {
                script {
                    echo 'Read pom file'
                    pom = readMavenPom file: "$POM_XML_FILE"
                    VERSION_OLD = pom.version.toString().replace('-SNAPSHOT', '')
                    ARTIFACT_ID = "${pom.artifactId}"

                    def version = VERSION_OLD.split("\\.")
                    version[0] = version[0].toInteger()+1
//                     version[1] = 0
//                     version[2] = 0

                    VERSION_BUILD = version.join('.')
                    version[2] = 1
                    VERSION_SNAPSHOT = version.join('.')

                    pom.version = VERSION_BUILD
                    writeMavenPom model: pom, file: "${POM_XML_FILE}"
                }
            }
        }
        stage ('Deploy') {
            agent any
            options {
                skipDefaultCheckout true
            }
            steps {
                script {
                    echo "Deploy version ${VERSION_BUILD}"
                    sh "rm .htaccess || true"
                    sh "rm .gitignore || true"
                    sh "rm -r .git/ || true"
                    sh "mkdir ${APACHE_PATH}  || true"
                    sh "rm -r ${APACHE_PATH}/* || true"
                    sh "cp -r . ${APACHE_PATH}/"
                }
            }
        }
        stage ('Release Candidate') {
            agent any
            environment {
                GITHUB_CREDENTIALS = credentials('github')
            }
            steps {
                script {
                    sh "git checkout -b ${BRANCH_DEFAULT} remotes/origin/${BRANCH_DEFAULT}"

                    sh "git config remote.origin.url https://'${GITHUB_CREDENTIALS_USR}:${GITHUB_CREDENTIALS_PSW}'@github.com/${GITHUB_CREDENTIALS_USR}/${ARTIFACT_ID}.git"

                    sh "git tag -a '${VERSION_BUILD}' -m \"tag ${VERSION_BUILD} gerada\""

                    sh "git push origin '${VERSION_BUILD}'"

                    echo 'Read pom file'
                    pom = readMavenPom file: "$POM_XML_FILE"

                    VERSION_SNAPSHOT = "${VERSION_SNAPSHOT}-SNAPSHOT"
                    echo "Incremented POM project version to ${VERSION_SNAPSHOT}"
                    pom.version = VERSION_SNAPSHOT
                    writeMavenPom model: pom, file: "${POM_XML_FILE}"

                    sh "git add ${POM_XML_FILE}"

                    sh 'git commit -m "POM version increased"'

                    sh "git push origin ${BRANCH_DEFAULT}"
                }
            }
        }
        /*
        stage ('Cache') {
            agent any
            steps {
                script {
                    sh "curl ${CLEAR_CACHE_URL}"
                }
            }
        }
         */
        /*
        stage ('Archive') {
            agent any
            environment {
                ARTIFACTORY_CREDENTIALS = credentials('artifactory')
            }
            steps {
                script {
                    CURL = 'curl -u ${ARTIFACTORY_CREDENTIALS_USR}:${ARTIFACTORY_CREDENTIALS_PSW} -X PUT $URL_ARTIFACTORY'

                    sh name: "Upload",
                    script: "$CURL/$ARTIFACT_ID/$JAR_NAME -T $PATH_ARTIFACT"

                    sh name: "Remove",
                    script:  "rm $PATH_ARTIFACT"
                }
            }
        }
        */
    }
}