const pify = require('pify');

class RequestDecorator {
    constructor(maxLimit, requestApi, needChange2Promise) {
        this.maxLimit = maxLimit;
        this.requestQueue = []; // 待请求队列
        this.currentConcurrent = 0; // 当前并发量数目
        this.requestApi = needChange2Promise ? pify(requestApi) : requestApi
    }

    // 发起请求
    async request(...args) {
        if (this.currentConcurrent > this.maxLimit) {
            //需要阻断
            this.startBlocking()
        }
        try{
            this.currentConcurrent ++;
            const result = await this.requestApi(...args);
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        } finally {
            console.log('当前并发数')
            this.currentConcurrent--;
            this.next()
        }
    }

    // 
    startBlocking() {
        let _resolve;
        let promise2 = new Promise((res, rej) => {
            _resolve = res
        })
        this.requestQueue.push(_resolve);
        return promise2
    }
    next() {
        if (this.requestQueue.length <= 0) return;
        const _resolve = this.requestQueue.shift();
        _resolve();
    }
}
module.exports = RequestDecorator