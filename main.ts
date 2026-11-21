import { mkdirSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

// The speaker asks for the scissors and receives them handle first.
// One lock falls; in that act, the speaker knows the next cut will be theirs.
// That recognition turns the first cut into an act of agency.
const poem = "I asked my mother for the scissors. She put them in my hand, handle first, and said, cut. I took one lock of my own hair at the temple and let it fall — and the floor caught it like a small dark permission, and I knew the next cut would be mine.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
console.log(`Poem Unicode code point count: ${Array.from(poem).length}`);
console.log(`Poem UTF-8 byte length: ${Buffer.byteLength(poem, 'utf8')}`);
