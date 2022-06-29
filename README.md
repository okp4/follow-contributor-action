# Follow contributor github action

Just a github action to follow a contributor.

## How to use it

```yaml
name: Follow contributor

on:
  pull_request:
    branches: [main]

jobs:
  follow-user:
    runs-on: ubuntu-20.04
    steps:
      - name: Follow user
        uses: ad2ien/follow-contributor-action@v1
        with:
          username: ${{ github.event.pull_request.user.login }}
          token: ${{ secrets.FOLLOW_TOKEN }}
```
