export function getCookie(name) {
    let cookieStr = document.cookie
    if(cookieStr.length===0) return
    let arr
    let res = null
    if (cookieStr.indexOf(';') > -1) {
        arr = cookieStr.split('; ')
        arr.forEach((cookie, index) => {
            let tem_arr = cookie.split('=')
            if (tem_arr[0] === name) {
                res = tem_arr[1]
            }
        })
    } else {
        let tem_arr = cookieStr.split('=')
        if (tem_arr[0] === name) {
            res = tem_arr[1]
        }
    }
    return res
}