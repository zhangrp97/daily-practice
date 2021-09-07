Function.prototype.myBind = function(obj, args) {
    // var that = this
    var arguments1 = Array.prototype.slice.call(arguments, 1)
    return function() {
        var funcArgs = arguments1.concat(Array.prototype.slice.call(arguments))
       return this.apply(obj, funcArgs)
    }
}

