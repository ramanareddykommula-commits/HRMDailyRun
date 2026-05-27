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

                // Continue even if tests fail
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npx playwright test'
                }
            }
        }
    }

    post {

        always {

            // Generate Allure Report
            allure([
                includeProperties: false,
                jdk: '',
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])

            // Send Email
            emailext(
                subject: "Daily Execution Playwright Execution Report - ${env.JOB_NAME} #${env.BUILD_NUMBER}",

                body: """
                <h2>Playwright Automation Execution</h2>

                <p><b>Project:</b> ${env.JOB_NAME}</p>

                <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>

                <p><b>Status:</b> ${currentBuild.currentResult}</p>

                <p>
                <a href="${env.BUILD_URL}allure">
                Open Allure Dashboard
                </a>
                </p>

                <p>
                <a href="${env.BUILD_URL}console">
                Open Console Output
                </a>
                </p>

                <p>
                Regards,<br>
                Jenkins Automation
                </p>
                """,

                mimeType: 'text/html',

                to: 'ramanareddy.kommula@gmail.com'
            )
        }
    }
}
