import { getInput } from '@actions/core'
import { getOctokit } from '@actions/github'

async function run(): Promise<void> {
  try {
    const token: string = getInput('token')
    const login: string = getInput('username')

    console.log(`Following user: ${login}`)

    const result = await getOctokit(token).rest.users.follow({
      username: login
    })
    
    console.info(`Result: ${result.status}`)

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn(`Error: ${error.message}`)
    } else {
      console.warn(`Error`, error)
    }
  }
}

run()
