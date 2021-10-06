declare global {
    interface Number {
        thousandsSeperator(): String;
    }
}
Number.prototype.thousandsSeperator = function (): string {
    return Number(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export { };


let number: number;
let result: String;
number = 123456789;
result = number.thousandsSeperator();

console.log(result);