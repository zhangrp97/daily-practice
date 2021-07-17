import React from 'react';
import ReactDom from 'react-dom';
import TestComponent from './components/Test.jsx'
// provider的作用把store传到每一个项目组件中
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDom.render(
    (
        <div>
            <Provider store={store}>
                <TestComponent />
            </Provider>
        </div>
    ),
    document.getElementById('root')
)
