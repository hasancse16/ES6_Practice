
class ParentClass {

    function1() {
        console.log("This is function 1");
    }
    function2() {
        console.log("This is function 2");
    }
}

class ChildClass extends ParentClass {

    function1() {
        console.log("This is function 1 from child class");
    }

    function3() {
        console.log("This is function 3");
    }
    function4() {
        console.log("This is function 4");
    }
}

obj = new ChildClass();

obj.function1();