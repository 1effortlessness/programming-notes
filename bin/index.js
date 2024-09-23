#!/usr/bin/env node

const { program } = require("commander");
const { todayCMD, startWorkCMD, rootCMD } = require("../index.js");

program
  .command("today")
  .description("Display today's date")
  .action(todayCMD);

program
  .command("start-work")
  .description("Start work for today")
  .action(startWorkCMD);

program
  .command("root")
  .description("Change directory to the root of the project")
  .action(rootCMD);

program.parse(process.argv);
