node("docker") {
    docker.withRegistry('https://hub.docker.com/', 'kkashyap1707') {

        git url: "https://github.com/kkashyap1707/myapp", credentialsId: 'kkashyap1707'

        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id

        stage "build"
        def app = docker.build "myApp"

        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}
