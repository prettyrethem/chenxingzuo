import React, { Component } from 'react'
import Swiper from '../../../commons/swiper'
//import Icon from './iconwrapper'
import './home.css'
import $http from '../../../utils/http'
import GoodsListItem from '../../../commons/goods'
import Dialog from '../../../commons/dialog'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            goodsList: [],
            channel_id: 3,
            caniquery: true,
            flag: false
        }
    }
    goSearch() {
        const { history } = this.props
        history.push({
            pathname: '/search'
        })
    }
    getFlag() {
        this.setState({
            flag: true
        })
        console.log(this.state.flag)     
    }
    changeFlag () {
        this.setState({
            flag: false
        })
        console.log(this.state.flag)
    }
    render() {
        return (
            <div className='homeBox'>
                { this.state.flag ? <Dialog tit='成功加入购物车' />:''}
                <header className='header'><input type="text" onFocus={this.goSearch.bind(this)} placeholder='请搜索' /></header>
                <main>
                    <Swiper></Swiper>
                </main>
                <div className='verso' ref='verso'>
                    <div className='product_List' onScroll={this.scrolling.bind(this)} ref='scrollDom'>
                        {
                            this.state.goodsList.map((item, idx) => {
                                return <GoodsListItem key={idx} list={item} changeFlag={this.changeFlag.bind(this)} flag={this.state.flag} getFlag={this.getFlag.bind(this)}></GoodsListItem>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    scrolling() {
        if (!this.state.caniquery) return

        const { verso, scrollDom } = this.refs
        let st = scrollDom.scrollTop
        let sh = scrollDom.offsetHeight
        let vh = verso.offsetHeight
        if (vh - (st + sh) < -80) {
            this.setState({
                channel_id:++this.state.channel_id
            })

            this.setState({
                caniquery: false
            })
            $http.post('/mall/index/getGoodsChannel', { channel_id: this.state.channel_id })
                .then(res => {
                    this.setState({
                        goodsList: [...this.state.goodsList, ...JSON.parse(res).data.data],
                        caniquery: true
                    })
                })
        }
    }
    componentDidMount() {
        if (!document.cookie) {
            this.props.history.push({
                pathname: '/login'
            })
        }
        $http.post('/mall/index/getGoodsChannel', { channel_id: this.state.channel_id })
            .then(res => {
                this.setState({
                    goodsList: JSON.parse(res).data.data
                })
            })
    }
}
export default Home