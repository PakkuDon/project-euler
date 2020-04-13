const child_process = require("child_process");
const fs = require("fs");

describe("Problem scaffolder", () => {
  afterEach(() => {
    fs.rmdirSync("src/problem-000-test-problem", { recursive: true });
  });
  describe("when given a problem name", () => {
    it("executes successfully", (done) => {
      expect.assertions(1);

      child_process.execFile(
        "script/generate_problem.js",
        ["Problem 000: Test problem"],
        (error) => {
          expect(error).toBeFalsy();
          done();
        }
      );
    });

    it("generates problem directory", (done) => {
      expect.assertions(1);

      child_process.execFile(
        "script/generate_problem.js",
        ["Problem 000: Test problem"],
        () => {
          expect(fs.readdirSync("src/problem-000-test-problem")).toEqual(
            expect.arrayContaining(["index.js", "index.test.js"])
          );
          done();
        }
      );
    });

    it("generates solution placeholder", (done) => {
      expect.assertions(1);

      child_process.execFile(
        "script/generate_problem.js",
        ["Problem 000: Test problem"],
        () => {
          const solutionPlaceholderText = fs.readFileSync(
            "src/problem-000-test-problem/index.js",
            "utf8"
          );
          expect(solutionPlaceholderText).toMatchSnapshot();

          done();
        }
      );
    });

    it("generates test placeholder", (done) => {
      expect.assertions(1);

      child_process.execFile(
        "script/generate_problem.js",
        ["Problem 000: Test problem"],
        () => {
          const testPlaceHolderText = fs.readFileSync(
            "src/problem-000-test-problem/index.test.js",
            "utf8"
          );
          expect(testPlaceHolderText).toMatchSnapshot();

          done();
        }
      );
    });
  });

  describe("when given incorrect number of arguments", () => {
    it("returns non-zero exit code", (done) => {
      child_process.execFile("script/generate_problem.js", (error) => {
        expect(error).toBeTruthy();

        done();
      });
    });

    it("prints usage string", (done) => {
      child_process.execFile("script/generate_problem.js", (error, stdout) => {
        expect(stdout).toContain("Usage");

        done();
      });
    });
  });
});
