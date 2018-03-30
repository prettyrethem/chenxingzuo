import React, { Component } from 'react'
import './mine.css'
class Mine extends Component {
    render () {
        return (
            <div>
                <img className='mine' src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2239146502,165013516&fm=27&gp=0.jpg" alt=""/>
                <p>陈星佐</p>
                <div>
                    <ul>
                        <li>账户余额</li>
                        <li>地址管理</li>
                        <li>我的客服</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Mine