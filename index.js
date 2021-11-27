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

function getBody (actionType) {
    switch (actionType) {
        case "love_text":
            const love_test = require("./love_text")
            break;
    
        default:
            break;
    }
}

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

    const body = getBody(inputs.actionType)

    await octokit.rest.repos.createCommitComment({
      owner: owner,
      repo: repo,
      commit_sha: sha,
      body: 
    });
  } catch (err) {
    core.setFailed(err.message);
  }
}
