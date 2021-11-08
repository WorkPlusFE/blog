// Instead of annotating an unnecessary import statement, the symbol _ is annotated, according to the annotation pattern.
def repoName = "blog"
def version = env.BRANCH_NAME

pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage("Bootstrap && Build") {
            agent {
                docker {
                    image 'node:12.22.3-alpine3.12' 
                    args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
                    reuseNode true
                }
            }
            steps {
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage("Deploy") {
            steps {
                sh 'rsync --delete -avz -e ssh ${WORKSPACE}/dist/* root@106.13.212.147:/data/workplus/websites/open.workplus.io/fe-blog/'
            }
        }
    }

    post {
        always {
            emailext(subject: '$DEFAULT_SUBJECT', body: '$DEFAULT_CONTENT', to: 'hejianxian@foreverht.com')
            cleanWs deleteDirs: true
        }
    }
}