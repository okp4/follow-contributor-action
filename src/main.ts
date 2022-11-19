import {getInput} from '@actions/core'
import {getOctokit} from '@actions/github'

const run = async (): Promise<void> => {
  try {
    const token: string = getInput('token')
    const username: string = getInput('username')

    console.log(`Following user: ${username}`)

    const result = await getOctokit(token).rest.users.follow({
      username
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
