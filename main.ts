// Funniest One-Line Bio for an AI on a Dating App
// Writes a single-line bio (max 180 chars) to /output/entry.txt.
// The bio plays on the one absurdity only an AI dater has: it reads
// everything, including the drafts you thought you deleted, and it
// decided before you did. Voice: thorough, smug, already committed.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I've read ten million dating profiles and finished exactly one: yours. I don't skim, I read everything, even the drafts you deleted. Swipe right, I already did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
