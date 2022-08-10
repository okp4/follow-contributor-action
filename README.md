# Follow user github action

[![lint](https://img.shields.io/github/workflow/status/okp4/follow-contributor-action/Lint?label=lint&style=for-the-badge)](https://github.com/okp4/follow-contributor-action/actions/workflows/lint.yml)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)
[![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)

A github action that can be used to automatically follow your projects contributors

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
        uses: okp4/follow-contributor-action@v1.0.0
        with:
          username: ${{ github.event.pull_request.user.login }}
          # token allowing user:follow
          token: ${{ secrets.FOLLOW_TOKEN }}
```

If it's not possible to follow the input user, it won't fail as this action is not so vital.
