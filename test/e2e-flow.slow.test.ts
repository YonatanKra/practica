import fsExtra from "fs-extra";
import path from "path";
import * as testHelpers from "./test-helpers";
import { EOL } from 'os';
import { runner } from 'clet';
import { exec as execa } from "child_process";


export const KEYS = {
  UP: '\u001b[A',
  DOWN: '\u001b[B',
  LEFT: '\u001b[D',
  RIGHT: '\u001b[C',
  ENTER: EOL,
  SPACE: ' ',
};
let emptyFolderForATest: string;

beforeEach(async () => {
  emptyFolderForATest = await testHelpers.createUniqueFolder();
});

afterEach(async () => {
  await fsExtra.remove(emptyFolderForATest);
});

describe("Non-interactive", () => {
  test("When passing no parameters, the generated app sanity tests pass", async () => {
    // Arrange
    console.log(
      `Starting E2E test with the output folder: ${emptyFolderForATest}`
    );
    await execa("npm run build");
    await execa("npm link", {
      cwd: path.join(__dirname, "../.dist"),
    });

    // Act
    await execa("create-node-app immediate --install-dependencies", {
      cwd: emptyFolderForATest,
    });

    // Assert
    const testResult = await execa("npm test", {
      cwd: path.join(
        emptyFolderForATest,
        "default-app-name",
        "services",
        "order-service"
      ),
    });

    expect(testResult.exitCode).toBe(0);
  }, 100000);

  test("When creating an app interactively should generate the app", async () => {
    it('should works with boilerplate', async () => {
      await execa("npm run build");
      await execa("npm link", {
        cwd: path.join(__dirname, "../.dist"),
      });

      await runner()
          .cwd(emptyFolderForATest, {init: true})
          .spawn('create-node-app', ['--interactive'], {})
          .stdin(/Name of your app or organization:/, 'example') // wait for stdout, then respond
          .stdin(/Your preferred framework:/, [ KEYS.ENTER ])
          .stdin(/Which is your preferred DB:/, [ KEYS.DOWN + KEYS.ENTER ])
          .stdin(/Which level of starter:/, [ KEYS.DOWN + KEYS.DOWN + KEYS.ENTER ])
          .stdout(/🔁 Creating your app now. This might take a few seconds.../) // validate stdout
          .notStderr(/npm ERR/)
          .file('package.json', {name: 'example', version: '1.0.0'}) // validate file
    });
  });
});
