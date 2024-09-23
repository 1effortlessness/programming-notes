const path = require("path");
const dayjs = require("dayjs");
const fs = require("fs");
const { execSync } = require("child_process");

const rootDir = __dirname;

const todosDir = path.join(rootDir, "01_todos");

function todayCMD() {
  console.log(new Date().toISOString());
}

function startWorkCMD() {
  const today = dayjs().format("YYYY-MM-DD");

  // Create the todos directory if it doesn't exist
  if (!fs.existsSync(todosDir)) {
    fs.mkdirSync(todosDir, { recursive: true });
    console.log(`Created directory: ${todosDir}`);
  }

  const todayFile = path.join(todosDir, `${today}.md`);

  if (!fs.existsSync(todayFile)) {
    fs.writeFileSync(todayFile, "");
    console.log(`Created new file: ${todayFile}`);
  }

  try {
    execSync(`vim ${todayFile}`, { stdio: "inherit" });
  } catch (error) {
    console.error("Failed to open file with vim:", error);
  }
}

module.exports = {
  todayCMD,
  startWorkCMD,
};
