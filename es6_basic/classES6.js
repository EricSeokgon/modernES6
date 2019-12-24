class Person {
    constructor(name, job) {
        this.name = name
        this.job = job
    }

    print() {
        console.log(this.job + " 직업을 가지고 있는 " + this.name + "씨");
    }
}

var seokgon = new Person("이석곤", "풀스텍 개발자")

seokgon.print();