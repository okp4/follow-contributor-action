import { getInput, setFailed } from '@actions/core'
import { getOctokit } from '@actions/github';

async function run(): Promise<void> {
  try {
    const token: string = getInput('token');
    const login: string =  getInput('username');

    const result = await getOctokit(token).rest.users.follow({
      username: login
    });
    console.log('Result : ' + result.status);
  } catch (error: unknown) {
    if (error instanceof Error) setFailed(error.message)
  }
}

run()
