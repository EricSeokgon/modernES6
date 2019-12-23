var name = "이석곤";
var job = "developer";

var hudi={
    name: name,
    job: job
}

console.log(hudi);

var person={
    name: "이석곤",
    getName: function(){
        return this.name;
    }
}
console.log(person.getName());
