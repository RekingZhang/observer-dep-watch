//依赖收集器
export default class Dep {
    constructor() {
        this.subs = []
    }
    depend() {
        this.subs.push(Dep.target)
    }
    notify() {
        for (let i = 0; i < this.subs.length; i++) {
            this.subs[i].fn()
        }
    }
}

Dep.target = null

export function pushTarget(watch) {
    Dep.target = watch
}
