// Fortune Cookie for the Liquidated Trader entry (Node 22, standard
// library only): writes one fortune cookie line, at most 20 words, for a
// crypto trader who just got liquidated, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The craft: it sounds like a real fortune — lucky numbers, a cookie — and
// the joke is that the cookie was leveraged too, so the fortune itself is
// part of the loss. The last line turns the trader into the market's
// favourite cautionary tale. Exactly 20 words.
// Verified by running the program: the output is one line, 20 words and
// 113 characters, inside the at-most-20-words and 1-to-160-character gates.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "Your lucky numbers are 0, 0, and 0. The cookie was leveraged too. You are the market's favourite cautionary tale.",
);
