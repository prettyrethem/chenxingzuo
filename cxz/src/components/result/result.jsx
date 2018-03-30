import React, { Component } from 'react'
import $http from '../../utils/http'
import GoodsListItem from '../../commons/goods'
import './result.css'
import Dialog from '../../commons/dialog'

class Result extends Component {
    goBack () {
        this.props.history.goBack()
    }
    constructor () {
        super()
        this.state = {
            goodsList: [],
            channel_id: 3,
            caniquery: true,
            flag: false
        }
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
    scrolling() {
        if (!this.state.caniquery) return

        const { verso, scrollDom } = this.refs
        let st = scrollDom.scrollTop
        let sh = scrollDom.offsetHeight
        let vh = verso.offsetHeight
        if (vh - (st + sh) < -80) {
            this.setState({
                channel_id: ++this.state.channel_id
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
    render () {
        console.log(this.props.location.state.val)
        return (
            <div>
             { this.state.flag ? <Dialog tit='成功加入购物车' />:''}
             <p onClick={this.goBack.bind(this)}>返回上一级</p>
             <p className='contents'>   {`这是您要查找的   ${this.props.location.state.val}    的信息`}</p>
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
    componentDidMount () {
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

export default Result