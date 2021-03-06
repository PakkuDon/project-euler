#!/usr/bin/env node
const process = require("process");
const fs = require("fs");

if (process.argv.length !== 3) {
  console.log('Usage: ./script/generate_problem.js "<problem name>"');
  console.log(
    'Example: ./script/generate_problem.js "Problem 3: Largest prime factor"'
  );
  process.exit(1);
}

const input = process.argv[2];
const [inputString, problemNumber, problemName] = input.match(
  /Problem (\d+): ([\w\s]+)/
);

const directoryName = `src/problem-${problemNumber.padStart(
  3,
  "0"
)}-${problemName.toLocaleLowerCase().replace(/\s/g, "-")}`;

if (fs.existsSync(directoryName)) {
  console.log(
    `Failed to generate directory for ${inputString}. ${directoryName} already exists.`
  );
  process.exit(1);
}
fs.mkdir(directoryName, { recursive: true }, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Created ${directoryName}`);
  fs.writeFileSync(
    `${directoryName}/index.js`,
    `module.exports = (number) => {}`
  );
  fs.writeFileSync(
    `${directoryName}/index.test.js`,
    `const solution = require("./index");

describe("${input}", () => {
  test("returns a number", () => {
    expect(solution(2)).toEqual(expect.any(Number));
  });

  test("2 returns 4", () => {
    expect(solution(2)).toEqual(4);
  });
});
  `
  );

  console.log(`├─ Created ${directoryName}/index.js`);
  console.log(`└─ Created ${directoryName}/index.test.js`);
});
