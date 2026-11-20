    pipeline {
    agent any

    environment {
        current_time = """${sh(
                returnStdout: true,
                script: '(date +%H%M%S)'
            )}"""
        start_time = """${sh(
                returnStdout: true,
                script: '(date -d 08:00 +%H%M%S)'
            )}"""
        end_time = """${sh(
                returnStdout: true,
                script: '(date -d 17:30 +%H%M%S)'
            )}"""
        // TELEGRAM_BOT_TOKEN = '8137864233:AAETIFoaqkNZ88gE0ErCmD9uOcLI9fyh5Lo'
        // CHAT_ID = '-4139785313'
    }

    stages {
        stage('Notify Start') {
            steps {
                sh  """
                    if [[ "$current_time" > "$start_time" ]] && [[ "$current_time" < "$end_time" ]];
                       then
                      echo notify Start
                    else
                      echo not matched
                    fi
                """
            }
        }

        stage('Clone') {
            steps {
                git branch: 'dev', credentialsId: '3c7436f6-8d07-4d18-855e-b5b6cd36d01f', url: 'https://gitlab.vietnampost.vn/groupvnpd/ipostmap-docs.git'
            }
        }

        stage('Docker Build') {
            steps {
                dir('.') {
                    sh 'docker compose build'
                }
            }
        }

        stage('Docker Deploy') {
            steps {
                dir('map4d-docs') {
                    sh 'docker stop map4d-docs || true'
                    sh 'docker rm map4d-docs || true'
                    sh 'docker run --name map4d-docs -d  --network host --memory 2048m map4d-docs:latest'

                }
            }
        }
    }

	// post {
	// 	success {
	// 		script {
    //             sh  """
	// 		    if [[ "$current_time" > "$start_time" ]] && [[ "$current_time" < "$end_time" ]];
    //                then
    //               echo success
    //             else
    //               echo not matched
    //             fi
	// 		    """
    //             def branch = env.GIT_BRANCH ?: 'N/A'
    //             def url = env.GIT_URL
    //             def gitLog = sh(script: 'git log -1 --pretty=full', returnStdout: true).trim()
    //             def message = "Success✅: Docker build and run completed.\nBranch: ${branch}\n${gitLog}\nFrom ${url}"
    //             sh """
    //                 curl -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    //                 -d "chat_id=${CHAT_ID}" \
    //                 -d "text=${message}"
    //             """
    //         }
	// 	}


	// 	unsuccessful {
	// 		script {
    //             sh  """
	// 		    if [[ "$current_time" > "$start_time" ]] && [[ "$current_time" < "$end_time" ]];
    //                then
    //               echo unsuccessful
    //             else
    //               echo not matched
    //             fi
	// 		    """
    //             def branch = env.GIT_BRANCH ?: 'N/A'
    //             def url = env.GIT_URL
    //             def gitLog = sh(script: 'git log -1 --pretty=full', returnStdout: true).trim()
    //             def message = "Failed😭: Docker build and run failed.❌\nBranch: ${branch}\n${gitLog}\nFrom ${url}"
    //             sh """
    //                 curl -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    //                 -d "chat_id=${CHAT_ID}" \
    //                 -d "text=${message}"
    //             """
    //         }
	// 	}
	// }
}
