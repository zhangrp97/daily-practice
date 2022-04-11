import React, { useEffect, useState } from 'react';

export default function Example() {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(10000);

    useEffect(() => {  // 每次init和update的时候都会执行
        document.title = count;
        console.log('hook title')
    })
    useEffect(() => { // 第二个参数是空数组，并且return一个function的时候相当于componentWillUnmount()
        return () => {
            console.log('取消订阅');
        }
    }, [])  
    useEffect(() => {  // 每次init的时候都会执行 componentDidMount()
        console.log('带括号')
    }, [])
    useEffect(() => { // init和score update的时候更新
        console.log(score)
    }, [score])
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <br/>
            <p>new score: {score}</p>
            <button onClick={() => setScore(score + 1000)}>Click score</button>
        </div>
    )
}

