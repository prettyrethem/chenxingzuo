import React, {Component} from 'react'
import './detail.css'
import $http from '../../utils/http'
import GoodsListItem from '../../commons/goods'
import Dialog from '../../commons/dialog'

class Detail extends Component {
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
    goback () {
        const { history } = this.props     
        history.goBack()
    }
    
    render () {
        const { location } = this.props
        return (
            <div>
                 { this.state.flag ? <Dialog tit='成功加入购物车' />:''}
                <div className="top" onClick={this.goback.bind(this)}>
                  <span className='goback'>goback</span>
                </div>
                <dl>
                    <dt><img className='imgs' src={'http://www.lb717.com'+location.state.obj_data} alt=""/></dt>
                    <dd>
                        <p className='els'>{location.state.goods_name}</p>
                        <p>${location.state.discount_price}</p>
                    </dd>
                </dl>
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

export default Detail