console.log("testing");
class Sum {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    calculate() {
        return this.num1 + this.num2;
    }
}
const result = new Sum(1, 54);
console.log(result.calculate());
export {};
