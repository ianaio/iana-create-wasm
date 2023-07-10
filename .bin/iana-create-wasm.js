#!/usr/bin/env node

const { spawn } = require("child_process");
const fs = require("fs");

let folderName = '.';

if (process.argv.length >= 3) {
  folderName = process.argv[2];
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
}

const clone = spawn("git", ["clone", "https://github.com/ianaio/iana-create-wasm", folderName]);

clone.on("close", code => {
  if (code !== 0) {
    console.error("CLONING THE IANA SYSTEM RUST WASM TEMPLATE FAILED!")
    process.exit(code);
  } else {
    console.log("WELCOME THE WORLD OF IANA SYSTEMS. 🦀 RUST🕸 WASM IS NOW ON);
  }
});

