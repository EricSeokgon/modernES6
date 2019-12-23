function foo() {
    if (true) {
        let a = 'bar';
        foo =2;

        const bar = 1;
        //bar =2 ;

        console.log(a);
    }
    //console.log(a);
}

foo();