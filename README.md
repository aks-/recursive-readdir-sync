# recursive-readir-sync

[![Build Status](https://travis-ci.org/aks-/recursive-readir-sync.svg?branch=master)](https://travis-ci.org/aks-/recursive-readir-sync)

Recursively list all files with absolute path in a directory and its subdirectories by the extension given. It does not list the directories themselves.

## Installation

    npm install recursive-readir-sync

## Usage

```javascript
var recursiveReaddir = require("recursive-readir-sync");
var files = recursiveReaddir('./path')

```

It can also take an extension which lists only files with that extension.

```javascript
var recursiveReaddir = require("recursive-readir-sync");

// list only files with extension .md
var files = recursiveReadir('./path', '.md')

```

## License

MIT © Ashok
