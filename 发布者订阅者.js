/* class MyEvent {
    handlers = {};  // 存放事件map,发布者，订阅者

    $on(type, fn) {
        if (!Reflect.has(this.handlers, type)) {
            this.handlers[type] = []
        }
        this.handlers[type].push(fn)
    }

    $emit(type, ...params) {
        if (!Reflect.has(this.handlers, type)) {
            throw new Error('未注册该事件')
        }
        this.handlers.forEach(fn => {
            fn(...params)
        });
    }

    $remove(type, fn) {
        if(!Reflect.has(this.handlers, type)) {
            throw new Error('无效事件')
        }
        if(!fn) {
            return Reflect.deleteProperty(this.handlers, type)
        } else {
            const index = this.handlers[type].findIndex(handler => handler === fn)
            if (index === -1) {
                throw new Error('事件不存在')
            }
            this.handlers[type].splice(index, 1)
            if (!this.handlers[type].length) {
                return Reflect.deleteProperty(this.handlers, type)
            }
        }
    }
} */

let MyEvent = {
    list: {},
    listen: function(type, fn) {
        if (!this.list[type]) {
            this.list[type] = []
        }
        this.list[type].push(fn)
    },
    trigger: function(type, params) {
        if (!this.list[type]) return
        this.list[type].forEach(fn => {
            fn(params)
        });
    }

}