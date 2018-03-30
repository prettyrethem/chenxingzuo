// 同源策略： 1.协议相同 2. 域名相同、 3、端口相同
// 基于fetch封装的请求方法，支持get和post


// domain  域名 拼接下面的url请求地址
// let domain;
// //本地测试服务器的域名
// if (process.env.NODE_ENV  == 'development') {
//     domain = 'http://localhost:9000'
// }

// if (process.env.NODE_ENV == 'production') {
//     domain = 'http://www.lb717.com'
// }


// let $http = {
//     //get请求
//     get(url, data) {
//         //判断data传过来的是否是{}对象格式
//         if (Object.prototype.toString.call(data) != "[object Object]") {
//             return {
//                 then(callback) {
//                     callback('GET请求入参格式不正确，格式OBJECT')
//                     return {
//                         catch(err) {
//                             err(new Error('入参格式不正确'))
//                         }
//                     }
//                 }
//             }
//         }

//         let queryString = '?';

//         for (let i in data) {
//             queryString += `${i}=${data[i]}&`
//         }
//         url = encodeURI(url + queryString.slice(0, -1))

//         //domai是域名
//         return fetch(domain + url, {
//             headers: {
//                 "content-type": "application/json;charset=utf-8"
//             }
//         }).then(res => res.json())

//     },

//     //post请求
//     post(url, data) {

//         if (Object.prototype.toString.call(data) != "[object Object]") {
//             return {
//                 then(callback) {
//                     callback('GET请求入参格式不正确，格式OBJECT')
//                     return {
//                         catch(err) {
//                             err(new Error('入参格式不正确'))
//                         }
//                     }
//                 }
//             }
//         }

//         //domai是域名
//         return fetch(domain + url, {
//             body: JSON.stringify(data), //必须解析成字符串
//             headers: {
//                 "Content-type": "application/json;charset=utf-8",
//                 "Token":"123123"              //Token是一个秘钥 加密逻辑 MD5
//             },
//             method: 'POST'
//         }).then(res => res.json())
//     }

// }
// export default $http


// console.log(process.env.NODE_ENV)
let domi
if (process.env.NODE_ENV === 'development') {
    domi = 'http://localhost:9000'
}
if (process.env.NODE_ENV === 'production ') {
    domi = 'http://www.lb717.com'
}
let $http = {
    get(url, data) {
        if (Object.prototype.toString.call(data) !== '[object Object]') {
            return {
                then(callback) {
                    callback('get请求入参格式不正确，需要传object')
                    return {
                        catch(err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        let queryString = '?'
        for (let i in data) {
            queryString += `${i}=${data[i]}&`
        }
        url = encodeURI(url + queryString.slice(0,-1))
        //解码
        //url = decodeURI(url + queryString.slice(0, -1))
        return fetch(domi+url, {
            headers: {
                "Content-type": "application/json;charset=utf-8"
            }
        }).then(res => { res.json() })
    },
    post(url, data) {
        if (Object.prototype.toString.call(data) !== '[object Object]') {
            return {
                then(callback) {
                    callback('get请求入参格式不正确，需要传object')
                    return {
                        catch(err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        
        return fetch(domi + url, {
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json;charset=utf-8",
                "Token":"123123"
            },
            method: 'POST'
        }).then((res)=> { return res.json()})                  
    }
}
export default $http  