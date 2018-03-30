import $http from '../../../utils/http'
import {getCookie} from '../../../utils/utils'
export default function mapDispatchToProps(dispatch) {
    return {
        fetchGoods (history) {
            $http.post('/user/cart/goodsList',{
                token:getCookie('token')
            })
            // .then(res=>{
            //     console.log(res)
            // })
            .then(res=>{
                console.log(res)
                if(res.error===1){
                    history.push('./login',{
                        from:'/index/shopcart'
                    })
                }
            })
        }
    }
}