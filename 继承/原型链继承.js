function Animal() {
    this.colors = ['red', 'yellow']
}
Animal.prototype.getColor = function() {
    return this.colors
}
function Dog() {}
Dog.prototype = new Animal()
Dog.prototype.constroctor = Dog

let dog1 = new Dog()
dog1.colors.push('ooo')

let dog2 = new Dog()
console.log(dog2.colors)