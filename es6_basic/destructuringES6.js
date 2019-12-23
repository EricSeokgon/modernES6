const hudi ={
    name:"이석곤",
    job: "developer",
    skills: ["ES6", "react", "node.js"]
}

let {name,job} = hudi; //비구조화 할당
console.log(name, job);

function printSkills({skills}) {
    skills.map((skill) => {
        console.log(skill);
    });
}

printSkills(hudi);

const languages = ["JavaScript", "Python", "Java", "C#"];
const [first, second, third] = languages;

console.log(first, second, third);
