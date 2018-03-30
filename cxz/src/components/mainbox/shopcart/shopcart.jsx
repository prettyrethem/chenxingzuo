import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from './state'
import './shopcart.css'
import mapDispatchToProps from './dispatch'
import CartItem from '../../cartitem/cartitem'
class Shopcart extends Component {
    render() {
        const { cartList } = this.props
        return (
            <div className='cart_box'>
                <div className="top">
                    <span></span>
                    <span className='tit'>购物车</span>
                    <span>编辑</span>
                </div>
                <ul className='cart-list'>
                    {
                        cartList.map((item, idx) => {
                            return (
                              <CartItem item={item} key={idx}></CartItem>
                          )
                        })
                    }
                </ul>
                <div className="footers">
                   <div className='all'>
                       <p>全选：<span className='select-btn iconfont icon-duihao'></span></p>
                       <p>总价：<span>s</span></p>
                    </div>
                   <div className='res'>结算</div>
                </div>
            </div>
        )
    }
    componentDidMount () {
        this.props.fetchGoods(this.props.history)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Shopcart)