
class ParentClass {

    function1() {
        console.log("This is function 1");
    }
    function2() {
        console.log("This is function 2");
    }
}

class ChildClass extends ParentClass {

    superFunction() {
        super.function1();
        super.function2();
    }
   
}

obj = new ChildClass();

obj.superFunction();