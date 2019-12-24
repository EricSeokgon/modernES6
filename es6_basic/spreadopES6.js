const a = [1, 2, 3];
const b = [3, 4];
const c = "끝";
const d = [...a, ...b, ...c];

console.log(d);

const a1 = [1, 2, 3, 4, 5];
const b1 = [...a1].reverse();

console.log(`a: ${a1}\nb: ${b1}`);
