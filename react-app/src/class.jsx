import React from 'react'

export default class MyDemo extends React.Component{
    constructor() {
        super()
        this.state = {
            wree: 324
        }
    }
    shouldComponentUpdate() {
        // console.log('更新子class了么')
        return false
    }
    componentDidUpdate() {
        console.log('子组件更新啦')
    }
    render() {
        return null
    }
}