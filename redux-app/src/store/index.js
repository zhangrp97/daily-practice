import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers.js'

// 创建store实例
let store = createStore(
    reducers,
    applyMiddleware(thunk)
)
export default store