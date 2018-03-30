import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapDispatchToProps from './dispatch'
class CartItem extends Component {
    constructor() {
        super()
        this.state = {
            changeClass: ''
        }
    }
   
    render() {
        const {updataCount,toggleClass, item} = this.props
        console.log(item)
        return (
            <li>
                <span onClick={()=>{toggleClass(1-item.selected,item.goods_id)}} className={ item.selected===0?'select-btn iconfont':'select-btn iconfont icon-duihao'}></span>
                <img src={'http://www.lb717.com' + item.obj_data} alt="" />
                <div className='right-box'>
                    <div className='context'>{item.goods_name}</div>
                    <div className='ad-re'>
                        <div className='pic'>
                            <i>num:{item.conut}</i>
                            <i>￥{item.discount_price}</i>
                        </div>
                        <div className='btn-box'>
                            <span onClick={() => { updataCount(--item.conut, item.goods_id) }}>-</span>
                            <i>{item.conut}</i>
                            <span onClick={() => { updataCount(++item.conut, item.goods_id) }}>+</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default connect(null,mapDispatchToProps,null,{pure:false})(CartItem)