import React, {Component} from 'react'
import './search.css'
class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            val:'',
            localStorageVal:[]
        }
    }
    changeVal (e) {
        this.setState({
            val: e.target.value
        })
    }
    goback () {       
        const { history } = this.props
        history.goBack()
    }
    toResult (item) {
        this.props.history.push({
            pathname:'/result',
            state:{
                val:item
            }
        })
    }
    search () {
        let ls = localStorage        
        if(this.state.val){
            this.props.history.push({
                pathname:'/result',
                state:{
                    val:this.state.val
                }
            })
            if(ls.getItem('searchHistory')){
                let shArr = JSON.parse(ls.getItem('searchHistory'))
                if(shArr.indexOf(this.state.val)>-1) return
                shArr.push(this.state.val)
                ls.setItem('searchHistory',JSON.stringify(shArr))
            }else{
                ls.setItem('searchHistory',JSON.stringify([this.state.val]))         
            }         
        }
        
    }
    componentDidMount () {
        if(localStorage.getItem('searchHistory')){
            this.setState({
                localStorageVal: JSON.parse(localStorage.getItem('searchHistory'))
            })
            
        }
    }
    clearHistory () {
        localStorage.removeItem('searchHistory')
        this.setState({
            localStorageVal:[]
        })
    }
    render () {
        return (
            <div>
                <header className='header'>
                  <span onClick={this.goback.bind(this)}>返回</span>
                  <input type="text" placeholder='请输入您要查找的唯品' value={this.state.val} onChange={this.changeVal.bind(this)}/>
                  <span onClick={this.search.bind(this)}>搜索</span>
                </header>
                <section>
                  <p className='flex'><span>最近搜索</span><span onClick={this.clearHistory.bind(this)}>清空记录</span></p>
                  
                   {
                       this.state.localStorageVal.length===0?<p>暂无搜索记录...</p>
                       :<ul className='list'>
                           {
                               this.state.localStorageVal.map((item,idx)=>{
                                   return <li key={idx} onClick={this.toResult.bind(this,item)}>{item}</li>
                               })
                           }
                       </ul>
                   } 
                </section>
            </div>
        )
    }
}

export default Search