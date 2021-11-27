const core = require("@actions/core");
const github = require("@actions/github");
const { inspect } = require("util");

function getSha() {}

try {
  // get the input from gitaction type: love_text, memes, thanks
  const actionType = core.getInput("type");
} catch (err) {
  core.setFailed(err.message);
}
