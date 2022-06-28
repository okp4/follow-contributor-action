import { getInput, setFailed } from '@actions/core'
import { getOctokit } from '@actions/github'

run()

async function run() {
    try {
        // Get inputs
        const token = getInput("token")
        const username = getInput("username")

        result = await getOctokit(token).rest.users.follow(username)
    } catch (error) {
        console.log(error)
        setFailed(error.message)
    }
}
