import fs from "fs";

const filePath = "src/data/playerData.ts";
const content = fs.readFileSync(filePath, "utf8");

const level = Number(content.match(/level:\s*(\d+)/)[1]);
const xp = Number(content.match(/xp:\s*(\d+)/)[1]);
const maxXp = Number(content.match(/maxXp:\s*(\d+)/)[1]);

// Random XP
const gainedXp = Math.random() < 0.5 ? 500 : 1000;

let newLevel = level;
let newXp = xp + gainedXp;
let newMaxXp = maxXp;

// Handle level-ups
while (newXp >= newMaxXp) {
  newXp -= newMaxXp;
  newLevel += 1;
  newMaxXp = Math.floor(newMaxXp * 1.5);
}

// Update file
const updated = content
  .replace(/level:\s*\d+/, `level: ${newLevel}`)
  .replace(/xp:\s*\d+/, `xp: ${newXp}`)
  .replace(/maxXp:\s*\d+/, `maxXp: ${newMaxXp}`);

fs.writeFileSync(filePath, updated);

fs.appendFileSync(process.env.GITHUB_ENV, `GAINED_XP=${gainedXp}\n`);

console.log(`Gained ${gainedXp} XP → Level ${newLevel}`);
