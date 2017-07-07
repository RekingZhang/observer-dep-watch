import observer from './observer.js'
import Watch from './watcher.js'

var data = {
    a: 1,
    b: 2
}


observer(data)

new Watch(data, 'a', () => {
    console.log('监听到修改a')
})

new Watch(data, 'a', () => {
    console.log('监听到修改a')
})

new Watch(data, 'b', () => {
    console.log('监听到修改b')
})

setTimeout(() => {
    console.log('修改data.a:')
    data.a = 2
}, 1000)
setTimeout(() => {
    console.log('修改data.b:')
    data.b = 1
}, 3000)
//bel
