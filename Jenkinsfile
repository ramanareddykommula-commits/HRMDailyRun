pipeline {
    agent any

    stages {

        stage('Clean Old Reports') {
            steps {
                bat '''
                IF EXIST allure-results rmdir /s /q allure-results
                IF EXIST allure-report rmdir /s /q allure-report
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {

            allure([
                includeProperties: false,
                jdk: '',
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']],
                tools: [allure: 'Allure']
            ])
        }
    }
}
