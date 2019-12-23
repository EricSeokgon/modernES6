function Foo() {
    this.func1 = function () {
        console.log(this);
        // this === Foo
    };
    this.func2 = function () {
        var func3 =  ()=> {
            console.log(this);
            //this === Foo
        }
        func3();
    }
}

var foo = new Foo();
foo.func1();
foo.func2();