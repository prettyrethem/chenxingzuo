import React, {Component} from 'react'
import './login.css'
import $http from '../../utils/http'

class Login extends Component {
    goback () {
        const { history } = this.props
        history.goBack()
    }
    goresginer () {
        const { history } = this.props
        history.push({
            pathname: '/resginer'
        })
    }
    login () {
        let { username, password } = this.refs
        $http.post('/user/login',{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            if(res.success===1){
                document.cookie = 'token='+res.token
                this.props.history.push({
                    pathname: '/index/home'
                })
            }else{
                alert('登陆出错')
            }
        })
    }
    render () {
        return (
            <div>
               <div className='header'><span onClick={this.goback.bind(this)}>返回</span><span>会员登录</span><span onClick={this.goresginer.bind(this)}>注册</span></div>
               <div className='phone'>手机：<input type='text' placeholder='请输入您的手机号' ref='username'/></div>
               <div className='pwd'>密码：<input type='password' placeholder='请输入您的手机号' ref='password'/></div>
               <button onClick={this.login.bind(this)}>立即登录</button>
            </div>
        )
    }
}

export default Login