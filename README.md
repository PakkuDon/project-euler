# Project Euler Solutions

Solutions to Project Euler puzzles. Written in JavaScript and with tests written in Jest. Test cases taken from [freeCodeCamp's Project Euler track](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/).

## Developing locally
1. Clone this repository and `cd` into it
2. Run `yarn install` to fetch developer dependencies (ie: Jest)
3. Run `yarn test [filepath]` to run tests
4. When starting a new exercise create a directory for it by running the following command:
```sh
./script/generate_problem.js "<problem name>"
```
```sh
# Example
$ ./script/generate_problem.js "Problem 3: Largest prime factor"
Created src/problem-003-largest-prime-factor
├─ Created src/problem-003-largest-prime-factor/index.js
└─ Created src/problem-003-largest-prime-factor/index.test.js
```

## Trivia
- This repo's initial commit was committed a day after the next commit (March 30 2020). This is due to the fact that when I first set up this repository I borked the git config and had all the commits under the wrong name. I was able to `git commit --amend --author` all but the initial commit so I created another repository, redid the initial commit manually, added the old repository as a remote, then cherry-picked all the fixed commits into this repo.
