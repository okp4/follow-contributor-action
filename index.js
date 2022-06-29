import { getInput, setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';

run();

async function run() {
  try {
    // Get inputs
    const token = getInput('token');
    const login = getInput('username');

    const result = await getOctokit(token).rest.users.follow({
      username: login
    });
    console.log('Result : ' + result.status);
  } catch (error) {
    console.log(error);
    setFailed(error.message);
  }
}
