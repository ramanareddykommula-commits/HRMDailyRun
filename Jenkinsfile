pipeline {
    agent any

    stages {

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {

        always {

            emailext(
                subject: "Playwright Report - ${currentBuild.currentResult}",

                body: """
                Build completed.

                Status: ${currentBuild.currentResult}

                Report:
                ${env.BUILD_URL}allure
                """,

                to: 'ramanareddy.kommula@gmail.com',
                attachLog: true
            )
        }
    }
}
