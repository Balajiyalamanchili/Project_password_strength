
let innerbar = document.querySelector('#innerbar')
let inputs = document.querySelector('input')
let l = document.getElementById('l')
let u = document.getElementById('u')
let s = document.getElementById('s')
let n = document.getElementById('n')
let chars = document.getElementById('chars')
let about = document.getElementById('about')

let [lower, upper, symbol, number] = [0, 0, 0, 0]

inputs.addEventListener('input', event => {

    value = inputs.value

    let number = ((/[0-9]/g).test(value) ? 10 : 0)
    let upper = ((/[A-Z]/g).test(value) ? 10 : 0)
    let lower = ((/[a-z]/g).test(value) ? 10 : 0)
    let symbol = ((/[^a-z0-9A-z]/g).test(value) ? 10 : 0)

    let width = 0
    let progress = number + upper + symbol + lower

    if (value.length >= 4) {
        width = value.length * 10
        if (width >= 100 - (40 - progress)) {
            width = 100 - (40 - progress)
        }
    }
    else {
        width -= 10
        if (width < 0) width = 0

    }

    innerbar.style.width = `${width}%`

    chars.innerHTML = `Your Password has <b>${value.length}</b> chars`

    n.style.color = number ? 'lime' : 'red'
    l.style.color = lower ? 'lime' : 'red'
    u.style.color = upper ? 'lime' : 'red'
    s.style.color = symbol ? 'lime' : 'red'


    if (width <= 50) {
        innerbar.style.backgroundColor = 'red'
        about.innerHTML = `Your password is <b>Weak`
    }
    else if (width <= 80) {
        innerbar.style.backgroundColor = 'orange'
        about.innerHTML = `Your password is <b>Medium`

    }
    else {
        innerbar.style.backgroundColor = 'lime'
        about.innerHTML = `Your password is <b>Strong`

    }

})