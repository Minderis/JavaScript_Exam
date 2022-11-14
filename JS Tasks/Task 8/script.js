/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
        this.sum = function(a, b) {
            return a + b;
        }
        this.subtraction = function(a, b) {
            return a - b;
        }
        this.multiplication = function(a, b) {
            return a * b;
        }
        this.division = function(a, b) {
            return a / b;
        }
}

// check results
const calculatorInstance = new Calculator();
console.log(calculatorInstance.sum(2,3));  //expect 5
console.log(calculatorInstance.subtraction(8,2)); //expect 6
console.log(calculatorInstance.multiplication(5,4)); //expect 20
console.log(calculatorInstance.division(15,5)); //expect 3