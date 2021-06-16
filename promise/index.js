const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function PromiseZ(fn) {
    this.status = PENDING;
    this.value = undefined;
    this.err = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const me = this;

    function resolve(value) {
        if (me.status === PENDING) {
            me.status = FULFILLED;
            me.value = value;
            queueMicrotask(() => {
                me.onFulfilledCallbacks.forEach(cb => cb(value))
            })
        }
    }
    function reject(err) {
        if (me.status === PENDING) {
            me.status = REJECTED;
            me.err = err;
            queueMicrotask(() => {
                me.onRejectedCallbacks.forEach(cb => cb(err))
            })
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }

}

PromiseZ.prototype.then = function (onFulfilled, onRejected) {
    const me = this;
    const onFulfilledCallback = typeof onFulfilled === 'function' ? onFulfilled : value => value
    const onRejectedCallback = typeof onRejected === 'function' ? onRejected : error => { throw error }
    let promiseZ2 = new PromiseZ((resolve, reject) => {
        if (me.status === FULFILLED) {
            queueMicrotask(() => {
                try {
                    // onFulfilledCallback(me.value);
                    let x = onFulfilledCallback(me.value)
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        } else if (me.status === REJECTED) {
            queueMicrotask(() => {
                try {
                    let x = onRejectedCallback(me.err);
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            me.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilledCallback(value)
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
            me.onRejectedCallbacks.push((err) => {
                try {
                    let x = onRejectedCallback(err);
                    resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        }
    })
    return promiseZ2

}

PromiseZ.prototype.all = function (promiseArray) {
    let count = 0;
    let result = [];
    return new PromiseZ(function () {
        promiseArray.forEach(promiseItem => {
            console.log(33,promiseItem)
            PromiseZ.resolve(promiseItem.value).then(res => {
                // count++;
                console.log(res)
                result.push(res);
            })
        })
        console.log(result)
        resolve(result);
    })
}
// PromiseZ.deferred = function () {
//     let defer = {};
//     defer.promise = new PromiseZ((resolve, reject) => {
//         defer.resolve = resolve;
//         defer.reject = reject;
//     });
//     return defer;
// }

// module.exports = PromiseZ
/* let resolve1;
console.log('start')
new PromiseZ(resolve => {

    // resolve('resolved')
    console.log('pengding')
    resolve1 = resolve
}).then(() => {
    console.log('then')
});
resolve1()
console.log('end') */

/* new Promise(res => res(10)).then(v => {
    console.log(77)
    return {
        other: v,
        then: () => {
            console.log(v+2)
            return v + 2;
        }
    }
}).then(ans => {
    console.log(ans);
}); */
let promise1 = new PromiseZ(function (resolve) {
    resolve(1);
});
let promise2 = new PromiseZ(function (resolve) {
    resolve(2);
});
let promise3 = new PromiseZ(function (resolve) {
    resolve(3);
});

let promisea = new PromiseZ();
let promiseAll = promisea.all([promise1, promise2, promise3]);
promiseAll.then(function (res) {
    console.log(111)
    console.log('res', res);
});