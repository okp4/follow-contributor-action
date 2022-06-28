import { getInput, setFailed } from "@actions/core";
import { getOctokit } from "@actions/github";

run();

async function run() {
  try {
    // Get inputs
    const token = getInput("token");
    const login = getInput("username");

    const oktokit = this.createOktokit(token)
    result = await oktokit.rest.users.follow({
        username: login,
    });
    // await getOctokit(token).request(`PUT /user/following/${username}`, {
    //     username: `'${username}'`,
    //   })
  } catch (error) {
    console.log(error);
    setFailed(error.message);
  }
}
