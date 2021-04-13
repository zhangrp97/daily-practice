async function main () {
    //如果是普通数据，那么会被包装为一个立即resolve的Promise对象
   // return 123
    await 124
   // return Promise.resolve(123)

//    return new Promise((resolve, reject) => {
//            resolve(123)
//    })
}
async function main1() {
    await 1212121
}
async function main2 () {
    const data = await main()
    await main1()
    console.log(data)
}
main2()