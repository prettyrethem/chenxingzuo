const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
app.use(bodyParser.json())
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Token')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

//列表接口
const options = {
  hostname: 'www.lb717.com',
  port: 80,
  path: '/mall/index/getGoodsChannel',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  }
};
const http = require('http')
const querystring = require('querystring')
app.post('/mall/index/getGoodsChannel', function (req, res) {
  let data = '';
  let request = http.request(options, response => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk
    });
    response.on('end', () => {
      res.end(JSON.stringify(data));
    });
  })
  request.write(querystring.stringify(req.body))
  request.end()
});

const fs = require('fs')
//注册接口
app.post('/user/resginer', function (req, res) {
  let user = fs.readFileSync('text.json', { encoding: 'utf-8' })
  user = JSON.parse(user)
  user.push(req.body)

  fs.writeFile('text.json', JSON.stringify(user), function () {
    res.end(JSON.stringify({
      'success': 1,
      'info': 'resginer success'
    }))
  })

})

//登录接口
app.post('/user/login', function (req, res) {
  let users = fs.readFileSync('text.json', { encoding: 'utf-8' })
  users = JSON.parse(users)
  //let loginTo = JSON.parse(req.body)
  let loginTo = req.body
  let resInfo = {
    success: 0,
    info: '用户名或密码错误',
    token: ''
  }
  // console.log(users)

  users.forEach(usr => {
    if (usr.username === loginTo.username && usr.password === loginTo.password) {
      resInfo.success = 1;
      resInfo.info = 'login success'
    }
  })
  if (resInfo.success === 1) {
    resInfo.token = jwt.sign(loginTo, '1511', {
      expiresIn: 60*60
    })
  }
  res.end(JSON.stringify(resInfo))
})

//分类页接口
app.post('/getClassify', (req, res) => {
  const classifyList = require('../datas/left.json')
  res.end(JSON.stringify(classifyList))
})
//添加购物车
app.post('/user/Cart/addCart', (req, res) => {
  jwt.verify(req.body.token, '1511', (err, decoded) => {
    if (err) {
      res.end(JSON.stringify({
        info:'登录过期，请重新登录',
        detail: err.TokenExpireError
      }))
    } else {
      let cartInfo = JSON.parse(fs.readFileSync(__dirname + '/cartinfo.json', { encoding: 'utf-8' }))
      if (cartInfo[decoded.username]) {
        let recordList = cartInfo[decoded.username]
        let flag=false
        recordList.forEach((item,idx)=>{
          if(item.goods_id===req.body.goods_info.goods_id){
            ++item.count
            flag=true
          }
        })
        if(!flag){
        let record = req.body.goods_info
        record.count=1
        record.selected=0
        cartInfo[decoded.username] = [record]
        }
      } else {
        let record = req.body.goods_info
        record.count=1
        record.selected=0
        cartInfo[decoded.username] = [record]
      }
      fs.writeFile(__dirname + '/cartinfo.json', JSON.stringify(cartInfo), function () {
        res.end('1')
      })

    }
  })
})

app.post('/user/cart/goodsList',(req,res)=>{
  jwt.verify(req.body.token, '1511', (err, decoded) => {
    if (err) {
      res.end(JSON.stringify({
        info:'登录过期，请重新登录',
        detail: err.TokenExpireError,
        error:1
      }))
    } else{
      let goodsRecord = JSON.parse(fs.readFileSync('./cartinfo.json',{encoding:'utf-8'}))
      res.json(goodsRecord[decoded.username])
    }
  })
})
app.listen(9000, function () {
  console.log('server listen 9000')
});