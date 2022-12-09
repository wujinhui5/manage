let deounce = function (callback, time) {
    let lock = false
    return function () {
        if (lock) return
        callback.call(this)
        lock = true
        setTimeout(() => {
            lock = false
        }, time)
    }
}
export { deounce }