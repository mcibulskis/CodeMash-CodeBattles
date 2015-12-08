function Fizzbuzz(){

  Fizzbuzz.prototype.isDivisibleByThree = function(number){
    return number % 3 === 0;
  };

  Fizzbuzz.prototype.isDivisibleByFive = function(number){
    return number % 5 === 0;
  };

  Fizzbuzz.prototype.isDivisibleByFifteen = function(number){
    return number % 15 === 0;
  };

  Fizzbuzz.prototype.convert = function(number){
    if (this.isDivisibleByFifteen(number)) return "FizzBuzz";
    if (this.isDivisibleByThree(number)) return "Fizz";
    if (this.isDivisibleByFive(number)) return "Buzz";
    return number;
  };
}
