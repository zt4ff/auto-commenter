<h1 align="center">Auto Commenter</h1>
This actions helps you to automatically create a comment on each comment. The comment can be custom message you created, love messages and memes to spice up and make development fun

#### Love Texts

![love_test](/readme_resources/love_texts.png)

#### Memes

![gifs](/readme_resources/meme.png)

#### Custom Messages

![custom-messages](/readme_resources/custom.png)

## Getting Started

### Installation

```yaml
name: Auto Commenter

on:
  push:

jobs:
  auto-comment-text:
    runs-on: ubuntu-latest
    steps:
      - uses: zt4ff/auto-commmenter@v2
        with:
          type: love_texts
```

### Usage

When a commit is pushed to the remote repository, this actions create a comment on each commit sha or hash.
The above installation code will auto comment a love test.
Currently, they are three type of comment actions: `love_texts`, `memes` and `custom`

### Examples

#### love_texts

```yaml
name: Auto Commenter

on:
  push:

jobs:
  auto-comment-text:
    runs-on: ubuntu-latest
    steps:
      - uses: zt4ff/auto-commmenter@v2
        with:
          type: love_texts
```

#### memes

```yaml
name: Auto Commenter

on:
  push:

jobs:
  auto-comment-memes:
    runs-on: ubuntu-latest
    steps:
      - uses: zt4ff/auto-commmenter@v2
        with:
          type: memes
```

#### custom messages

```yaml
name: Auto Commenter

on:
  push:

jobs:
  auto--custom-comment:
    runs-on: ubuntu-latest
    steps:
      - uses: zt4ff/auto-commmenter@v2
        with:
          type: custom
          body: |
            This is custom message
            It's multiline and it also support github markdown.
            - list item 1
            - llist item 2
```

## Action inputs

| Name         | Description                                                                                                                                          | Default                                                                         |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`       | (**required**) The type of comment the action should give. Includes `love_texts`, `memes`, or `custom`                                               | `love_texts`                                                                    |
| `token`      | (**optional**) `GITHUB_TOKEN` or a `repo` scoped [PAT](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). | `GITHUB_TOKEN`                                                                  |
| `repository` | (**optional**) The full name of the target repository.                                                                                               | `github.repository` (current repository)                                        |
| `sha`        | (**optional**) The commit SHA.                                                                                                                       | `github.sha` OR, for `pull_request` events `github.event.pull_request.head.sha` |
| `body`       | (**optional**) The contents of the comment if `type` is `custom`.                                                                                    |                                                                                 |

## License

[MIT](License)
