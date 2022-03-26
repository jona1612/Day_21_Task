window.onload = function () {
    var div = document.createElement('div')
    div.setAttribute('id', 'div')
    div.setAttribute('onload', 'fun()')
    document.body.appendChild(div)
    var a = 10
    var b = (k) => {
        setTimeout(() => {
            if (a >= 1) {
                div.classList.add('container', 'text-center', 'fw-bold', 'fs-1')
                div.innerText = a
            }
            if (a == 0) {
                div.classList.add('container', 'text-center', 'fw-bold', 'fs-1')
                div.innerText = "Happy Independence Day"
                return
            }
            a--
            k(b)
        }, 1000)
    }
    var c = (k) => {
        k(c)
    }
    b(c)
}