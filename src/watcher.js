import Dep, {
    pushTarget
} from './dep'

export default class Watch {
    constructor(data, exp, fn) {
        this.exp = exp
        this.fn = fn
        pushTarget(this)
        data[exp]
    }
}
