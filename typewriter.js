const sentence = "hello there from lighthouse labs";
let delay = 0;
const newLineDelay = 50 * sentence.length;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char),delay);
  delay += 50;
}
setTimeout(() => console.log(),newLineDelay);