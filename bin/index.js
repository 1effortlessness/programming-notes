#!/usr/bin/env node
const { startWorkCMD } = require("../index");
const { program } = require("commander");

program.command("start-work").action(() => {
  startWorkCMD();
});

program.parse(process.argv);
