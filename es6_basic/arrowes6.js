//es5
var a = function () {
    console.log("function");
};
a();

//es6 Arrow Function
const b = () => {
    console.log("arrow function");
};
b();

const print = text => {
    console.log(text);
};
//파라미터가 1개일땐 관호 생략 가능
print("test");

const sum = (a, b) => (a + b);
//간단한 표현식만을 반환 할때는 return 생략 가능
console.log(sum(1,3));