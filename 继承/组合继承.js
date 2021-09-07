function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
}
Animal.prototype.getName = function() {
    return this.name
}
// 组合继承
function Dog(name, age) {
    Animal.call(this, name)  // 构造函数继承
    this.age = age
}
Dog.prototype = new Animal()  // 原型继承
Dog.prototype.constructor = Dog  // 需要把构造函数指回Dog

/* function F() {}
F.prototype = Animal.prototype
let f = new F()
F.constroctor = Dog
Dog.prototype = f */
/* 寄生组合式继承，创建父原型对象的副本
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constroctor = Dog */

let dog1 = new Dog('北京', 3)
dog1.colors.push('cc')

let dog2 = new Dog('上海', 2)
console.log(dog2)