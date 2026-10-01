console.log("testing");

class Sum{
num1 :number;
num2 :number;
    constructor(num1:number , num2 :number){
        this.num1=num1;
        this.num2 =num2
    }
    calculate() :number{
        return this.num1+this.num2;
    }
}

const result =new Sum(1,54);
console.log(result.calculate());
