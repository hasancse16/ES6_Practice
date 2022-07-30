class myClass {

    // static keyword
    static hello() {
        console.log("Hello");
    }

    constructor(x,y){
        // console.log(x+y);
        this.firstNumber = x;
        this.secondNumber = y;
    }

    myFun() {
        return this.firstNumber + this.secondNumber;
        // console.log(this.firstNumber + this.secondNumber);
    }
}

// obj = new myClass(10, 40);

// obj.myFun();

myClass.hello();

// console.log(obj.myFun());