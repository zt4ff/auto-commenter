const core = require("@actions/core");
const github = require("@actions/github");
const { consumers } = require("stream");
const { inspect } = require("util");

function getSha() {
  if (github.context.eventName == "pull_request") {
    return github.context.payload.pull_request.head.sha;
  } else {
    return github.context.sha;
  }
}

const getLoveTest = () => {
  const love_test = require("./love_text");
  return `${
    love_test[Math.floor(Math.random() * love_test.length)]
  } :heart: :heart: `;
};

const getMemesLink = () => {
  const memes_link = require("./memes_link");
  return `![memes](${
    memes_link[Math.floor(Math.random() * memes_link.length)]
  })`;
};

async function run() {
  try {
    const inputs = {
      actionType: core.getInput("type"),
      token: core.getInput("token"),
      repository: core.getInput("repository"),
      sha: core.getInput("sha"),
    };
    core.debug(`Inputs: ${inspect(inputs)}`);

    const [owner, repo] = inputs.repository.split("/");

    const sha = inputs.sha ? inputs.sha : getSha();
    core.debug(`SHA: ${sha}`);

    const octokit = github.getOctokit(inputs.token);

    function getBody(actionType) {
      switch (actionType) {
        case "love_texts":
          return getLoveTest();
        case "memes":
          return getMemesLink();
        case "custom":
          return core.getInput("body");
        default:
          return getLoveTest();
      }
    }

    await octokit.rest.repos.createCommitComment({
      owner: owner,
      repo: repo,
      commit_sha: sha,
      body: getBody(inputs.actionType),
    });
  } catch (err) {
    core.debug(inspect(err));
    core.setFailed(err.message);
  }
}

run();
