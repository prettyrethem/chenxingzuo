import React, { Component } from 'react'
import $http from '../../utils/http'
import './goods.css'
import Lazyload from 'react-lazyload'
import { withRouter } from 'react-router-dom'
import { getCookie } from '../../utils/utils'
import { connect } from 'react-redux'
import { ADD_CART } from '../../store/reducers'
@withRouter
class Goods extends Component {
    addcart(e) {
        const { list, getFlag, changeFlag } = this.props
        e.stopPropagation()
        if (getCookie('token')) {
            $http.post('/user/Cart/addCart', {
                token: getCookie('token'),
                goods_id: list.goods_id,
                goods_info: list
            })
                .then(res => {
                    console.log(res)
                    if (res === 1) {
                        getFlag()
                        setTimeout(function () {
                            changeFlag()
                        }, 2000)
                        this.props.dispatch({
                            type: ADD_CART,
                            data: {
                                ...list,
                                conut: 1,
                                selected: 0
                            }
                        })
                    }
                })
        } else {
            this.props.history.push('/login')
        }

    }
    goDetail() {
        this.props.history.push({
            pathname: '/detail',
            state: this.props.list
        })
    }
    render() {
        const { list } = this.props
        return (
            <dl className='good_Item' onClick={this.goDetail.bind(this)}>
                <dt className='good_Item_Img'>
                    <Lazyload overflow once debounce={500} placeholder={<Placeholder />}>
                        <img src={'http://www.lb717.com' + list.obj_data} alt="" />
                    </Lazyload>
                </dt>
                <dd>
                    <p className='goods_detail'>{list.goods_name}</p>
                    <p className='pic_cart'><span className='goods_price'>${list.discount_price}</span><span className='goods_cart' onClick={this.addcart.bind(this)}>cart</span></p>
                </dd>
            </dl>
        )
    }
}
class Placeholder extends Component {
    render() {
        return <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521692692674&di=2facfb2c8d456095d75d74a6e21ade73&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F79f0f736afc379311cb96e33edc4b74542a911d2.jpg" alt="" />
    }
}
export default connect(null)(Goods)