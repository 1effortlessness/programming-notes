import path from "path";
import dayjs from "dayjs";
import fs from "fs";
import { execSync, spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, "..");
const todosDir = path.join(rootDir, "01_todos");

export function todayCMD() {
  console.log(new Date().toISOString());
}

export function startWorkCMD() {
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

export function rootCMD() {
  try {
    const shell = "zsh";
    spawn(shell, [], {
      cwd: rootDir,
      stdio: "inherit",
    });
  } catch (error) {
    console.error(`Failed to open shell in ${rootDir}:`, error);
  }
}
