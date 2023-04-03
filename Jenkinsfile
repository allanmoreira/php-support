pipeline {
    agent none
    environment {
        APACHE_PATH = '/var/www/html/php-support'
        BRANCH_DEFAULT = "master"
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
        stage ('Release Candidate') {
            agent any
            environment {
                GITHUB_CREDENTIALS = credentials('github')
            }
            steps {
                script {
                    ARTIFACT_ID = "${pom.artifactId}"

                    sh name: 'Checkout Git master branch',
                    script: "git checkout -b ${BRANCH_DEFAULT} remotes/origin/${BRANCH_DEFAULT}"

                    sh name: 'Set remote origin url',
                    script: "git config remote.origin.url https://'${GITHUB_CREDENTIALS_USR}:${GITHUB_CREDENTIALS_PSW}'@github.com/${GITHUB_CREDENTIALS_USR}/${ARTIFACT_ID}.git"

                    echo 'Read pom file'
                    pom = readMavenPom file: "$POM_XML_FILE"
                    def version = pom.version.toString().split("\\.")
                    version[0] = version[0].toInteger()+1
                    version[1] = 0
                    version[2] = 0

                    pom.version = version.join('.')
                    writeMavenPom model: pom, file: "${POM_XML_FILE}", name: 'Write Maven POM file'
                    POM_XML_VERSION = "${pom.version}"
                    echo "Incremented POM project version to ${POM_XML_VERSION}"

                    sh name: "Create local Git tag for ${POM_XML_VERSION}",
                    script: "git tag -a '${POM_XML_VERSION}' -m \"tag ${POM_XML_VERSION} gerada\""

                    sh name: "Push local tag to Bitbucket",
                    script: "git push origin '${pom.version}'"

                    sh name: "Add POM file to Git",
                    script: "git add ${POM_XML_FILE}"

                    sh name: "Commit POM file to Git",
                    script: 'git commit -m "POM version increased"'

                    echo 'Push local changes to GitHub'
                    sh name: '', script: "git push origin ${BRANCH_DEFAULT}"
                }
            }
        }
    }
}