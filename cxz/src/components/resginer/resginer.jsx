import React, {Component} from 'react'
import './resginer.css'
import $http from '../../utils/http'
class Resginer extends Component {
    goback () {
        const { history } = this.props
        history.goBack()
    }
    gologin () {
        const { history } = this.props
        history.push({
            pathname: '/login'
        })
    }
    toresginer (){
        let { username, password } = this.refs
        const { history } = this.props        
        $http.post('/user/resginer',{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            console.log(res)
            if(res.success===1){
                history.push({
                    pathname: '/login'
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render () {
        return (
            <div>
                <div className='header'><span onClick={this.goback.bind(this)}>返回</span><span>会员登录</span><span onClick={this.gologin.bind(this)}>登录</span></div>
                <div className='phone'>手机：<input type='text' placeholder='请输入您的手机号' ref='username'/></div>
                <div className='pwd'>密码：<input type='password' placeholder='请输入您的手机号' ref='password'/></div>
                <button onClick={this.toresginer.bind(this)}>确定</button>
            </div>
        )
    }
}

export default Resginer