import Dep from './dep.js'
// Observer
class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) {
        Object.keys(data).forEach((key, index, arr) => {
            let dep = new Dep();
            let val = data[key];
            observer(val)
            Object.defineProperty(data, key, {
                enumerable: true,
                configurable: true,
                get: function() {
                    dep.depend()
                    return val
                },
                set: function(newVal) {
                    if (val === newVal) {
                        return
                    }
                    observer(newVal)
                    dep.notify()
                }
            })
        })
    }
}

export default function observer(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
        return
    }
    new Observer(data)
}
