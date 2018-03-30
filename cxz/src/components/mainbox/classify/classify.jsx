import React, { Component } from 'react'
import $http from '../../../utils/http'
import './classify.css'
import Lazyload from 'react-lazyload'

class Placeholder extends Component {
    render () {
        return <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521692692674&di=2facfb2c8d456095d75d74a6e21ade73&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F79f0f736afc379311cb96e33edc4b74542a911d2.jpg" alt=""/>
    }
}
class Classify extends Component {
    constructor() {
        super()
        this.state = {
            classList: [],
            id: 0,
            con: null
        }
    }
    changeId(idx, item) {
        let list = JSON.parse(item.catalogBranch)
        this.setState({
            id: idx,
            con: list.data
        })
    }
 
    render() {
        return (
            <div className='box'>
                <div className="left">
                    <div className='son'>
                        {
                            this.state.classList.map((item, idx) => {
                                return (
                                    <span onClick={this.changeId.bind(this, idx, item.datas)} className={this.state.id===idx?'change':''} key={idx}>{item.tit}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <div className='right_son'>
                        {
                            this.state.con !== null && this.state.con.map((item, idx) => {
                                return (
                                    <div key={idx} className='right_List'>
                                        <p>{item.name}</p>
                                        <div className='item_box'>
                                            {
                                                item.catelogyList.map((items, index) => {
                                                    return (
                                                        <div key={index} className='list_item'>
                                                            
                                                            <Lazyload overflow once debounce={500} placeholder={<Placeholder></Placeholder>}><img src={items.icon} alt="" /></Lazyload>
                                                            <span>{items.name}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        $http.post('/getClassify', { id: 1 })
            .then(res => {
                this.setState({
                    classList: res
                })
                res.map((item, idx) => {
                    if (item.tit === '热门推荐') {
                        this.setState({
                            con: JSON.parse(item.datas.catalogBranch).data
                        })
                    }
                })
            })
    }
}
export default Classify