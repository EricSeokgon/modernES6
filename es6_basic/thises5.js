function Foo() {
    this.func1 = function () {
        console.log(this);
        // this === Foo
    };
    this.func2 = function () {
        var func3 = function () {
            console.log(this);
            //this === Window(glocal)
        }
        func3();
    }
}

var foo = new Foo();
foo.func1();
foo.func2();