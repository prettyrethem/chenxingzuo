import React, { Component } from 'react'
import './icon.css'
class Icon extends Component {
    render () {
        const { list } = this.props
        return (
            <ul className='list'>
                <li>
                    <img src={require('../../../../static/img/banner (5).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (4).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (5).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (4).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (5).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (4).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (5).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                <li>
                    <img src={require('../../../../static/img/banner (4).jpg')} alt=""/>
                    <span>生鲜</span>
                </li>
                {/* {
                    list.map((item, idx) => {
                        return (
                            <li>
                                <img src={item.src} alt=""/>
                                <span>{item.tit}</span>
                            </li>
                        )
                    })
                } */}
            </ul>
        )
    }
}

export default Icon