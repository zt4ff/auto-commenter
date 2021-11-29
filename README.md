<h1 align="center">Auto Commenter</h1>
<p align="center">This actions helps you to automatically create a comment on each comment. The comment can be custom message you created, love messages and memes to spice up and make development fun</p>

Love Texts:
![love_test](/readme_resources/love_texts.png)

Memes
![gifs](/readme_resources/meme.png)

Custom Messages
![custom-messages](/readme_resources/custom.png)

## Getting Started

### Installation

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
          type: love_tests
```

### Usage

When a commit is pushed to the remote repository, this actions create a comment on each commit sha or hash.
The above installation code will auto commit a love test
