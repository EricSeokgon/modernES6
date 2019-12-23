const name = "이석곤";
const job = "developer";

let hudi = {
    name: name,
    job: job
}

console.log(hudi);

const person={
    name:"이석곤",
    getName(){
        return this.name;
    }
}
console.log(person.getName());